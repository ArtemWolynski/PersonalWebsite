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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    SkillsComponent,
    PortfolioComponent,
    FeedbackComponent,
    GetInTouchComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ngWebsiteTemplate'}),
    AppRoutingModule,
    SidebarModule,
    ProgressBarModule,
    SkillItemModule,
    SkillTileModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
