import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagePreviewComponent } from './language-preview.component';

describe('LanguagePreviewComponent', () => {
  let component: LanguagePreviewComponent;
  let fixture: ComponentFixture<LanguagePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
