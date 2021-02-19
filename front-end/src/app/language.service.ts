import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';
import { languagesPerPage } from '../constants';
import { Language } from 'src/interfaces';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languages: any[] = [];
  private currentPage: number = 1;
  pageCount: number = 0;

  constructor(private apollo: Apollo) {
    this.queryLanguages();
  }

  setCurrentPage(currentPage: number) {
    this.currentPage = currentPage;
    this.queryLanguages();
  }

  getCurrentPage() {
    return this.currentPage;
  }

  getLanguagesPage(): Language[] {
    return this.languages;
  }

  get query() {
    const query = gql`
    {
      languages(page: {
        size: ${languagesPerPage},
        number: ${this.currentPage - 1}
      }) {
        languages {
          name
          description
        }
        totalCount
      }
    }
  `;

    return query;
  }

  private queryLanguages(): void {
    this.apollo
      .watchQuery({ query: this.query })
      .valueChanges.subscribe((response: any) => {
        let languages = response.data.languages.languages.map(
          (language: { name: string; description: string }) => {
            return language;
          }
        );
        let languageCount = response.data.languages.totalCount;
        this.languages = languages;
        this.pageCount = Math.ceil(languageCount / languagesPerPage);
      });
  }
}
