import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './main/layout/header-component/header-component.component';
import { SkillsComponent } from './main/layout/skills/skills.component';
import { PortfolioComponent } from './main/layout/portfolio/portfolio.component';
import { FeedbackComponent } from './main/layout/feedback/feedback.component';
import { GetInTouchComponent } from './main/layout/get-in-touch/get-in-touch.component';
import {SidebarModule} from './components/sidebar/sidebar.module';
import {ProgressBarModule} from './components/progress-bar/progress-bar.module';
import {SkillItemModule} from './components/skill-item/skill-item.module';
import {SkillTileModule} from './components/skill-tile/skill-tile.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReviewModule} from './components/review/review.module';
import {ProjectsModule} from './components/projects/projects.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {ButtonsModule} from './components/buttons/buttons.module';
import {MenuModule} from './components/menu/menu.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    SkillsComponent,
    PortfolioComponent,
    FeedbackComponent,
    GetInTouchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ngWebsiteTemplate'}),
    AppRoutingModule,
    SidebarModule,
    ProgressBarModule,
    SkillItemModule,
    SkillTileModule,
    BrowserAnimationsModule,
    ReviewModule,
    ProjectsModule,

    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ButtonsModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
