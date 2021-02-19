import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageService } from './language.service';
import { AboutComponent } from './views/about/about.component';
import { LanguagesComponent } from './views/languages/languages.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'languages', pathMatch: 'full' },
  { path: 'languages', component: LanguagesComponent },
  // { path: 'languages', component:  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
