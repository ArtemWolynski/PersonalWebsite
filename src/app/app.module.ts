import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './main/feedback/feedback.component';
import { GetInTouchComponent } from './main/get-in-touch/get-in-touch.component';
import {SidebarModule} from './components/sidebar/sidebar.module';
import {ProgressBarModule} from './components/progress-bar/progress-bar.module';
import {SkillTileModule} from './main/skills/skill-tile/skill-tile.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {ButtonsModule} from './components/buttons/buttons.module';
import {MenuModule} from './components/menu/menu.module';
import { FooterComponent } from './components/footer/footer.component';
import 'zone.js';
import {ControlsModule} from './components/controls/controls.module';
import {NgParticlesModule} from 'ng-particles';
import {SkillsModule} from './main/skills/skills.module';
import {MainScreenModule} from './main/main-screen/main-screen.module';
import {PortfolioModule} from './main/portfolio/portfolio.module';
import {FeedbackModule} from './main/feedback/feedback.module';
import {GetInTouchModule} from './main/get-in-touch/get-in-touch.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ngWebsiteTemplate'}),
    AppRoutingModule,
    SidebarModule,
    ProgressBarModule,
    SkillTileModule,
    BrowserAnimationsModule,
    PortfolioModule,
    SkillsModule,
    MainScreenModule,
    FeedbackModule,
    GetInTouchModule,

    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ButtonsModule,
    MenuModule,
    NgParticlesModule,
    ControlsModule,
    PortfolioModule,
    FeedbackModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
