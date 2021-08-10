import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {MainScreenComponent} from './main/main-screen/main-screen.component';
import {SkillsComponent} from './main/skills/skills.component';
import {PortfolioComponent} from './main/portfolio/portfolio.component';
import {RecommendationsComponent} from './main/feedback/recommendations.component';
import {GetInTouchComponent} from './main/get-in-touch/get-in-touch.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about', component: MainScreenComponent
  },
  {
    path: 'skills', component: SkillsComponent
  },
  {
    path: 'projects', component: PortfolioComponent
  },
  {
    path: 'reviews', component: RecommendationsComponent
  },
  {
    path: 'contacts', component: GetInTouchComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
