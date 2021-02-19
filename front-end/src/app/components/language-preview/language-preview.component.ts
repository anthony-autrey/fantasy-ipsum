import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-language-preview',
  templateUrl: './language-preview.component.html',
  styleUrls: ['./language-preview.component.scss'],
})
export class LanguagePreviewComponent implements OnInit {
  @Input() language!: { name: string; description: string };

  constructor() {}

  ngOnInit(): void {}
}
