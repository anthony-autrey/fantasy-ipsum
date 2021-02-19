import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { languagesPerPage } from 'src/constants';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-preview-page',
  templateUrl: './preview-page.component.html',
  styleUrls: ['./preview-page.component.scss'],
})
export class PreviewPageComponent implements OnInit {
  get languages() {
    return this.languageService.getLanguagesPage();
  }

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    // this.getLanguages();
  }

  // getLanguages(): void {
  //   this.languageService.getLanguages().subscribe((response) => {
  //     console.log({ response });
  //     let languages = response.data.languages.languages.map(
  //       (language: { name: string; description: string }) => {
  //         return language;
  //       }
  //     );
  //     console.log({ languages });
  //     this.languages = languages;
  //   });
  // }
}
