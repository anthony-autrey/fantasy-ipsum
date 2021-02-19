import { Component } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  constructor(private languageService: LanguageService) {}

  get pageCount() {
    return this.languageService.pageCount;
  }
  get currentPage() {
    return this.languageService.getCurrentPage();
  }

  get showPagination() {
    return this.pageCount > 1;
  }

  get showFirstEllipsis() {
    return this.currentPage > 2 && this.pageCount > 3;
  }

  get showLastEllipsis() {
    return this.currentPage < this.pageCount - 1 && this.pageCount > 3;
  }

  get showPrevious() {
    return this.currentPage > 1;
  }

  get showNext() {
    return this.currentPage < this.pageCount;
  }

  setCurrentPage(currentPage: number) {
    if (currentPage > 0 && currentPage <= this.pageCount)
      this.languageService.setCurrentPage(currentPage);
  }
}
