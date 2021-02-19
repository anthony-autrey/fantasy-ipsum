import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguagePreviewComponent } from './language-preview/language-preview.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PreviewPageComponent } from './preview-page/preview-page.component';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    LanguagePreviewComponent,
    NavBarComponent,
    PaginationComponent,
    PreviewPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, GraphQLModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
