import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguagePreviewComponent } from './components/language-preview/language-preview.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PreviewPageComponent } from './components/preview-page/preview-page.component';
import { GraphQLModule } from './graphql.module';
import { LanguagesComponent } from './views/languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguagePreviewComponent,
    NavBarComponent,
    PaginationComponent,
    PreviewPageComponent,
    LanguagesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, GraphQLModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
