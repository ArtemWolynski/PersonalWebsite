import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SidebarModule} from './components/sidebar/sidebar.module';
import {ProgressBarModule} from './components/progress-bar/progress-bar.module';
import {SkillTileModule} from './main/skills/skill-tile/skill-tile.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {ButtonsModule} from './components/buttons/buttons.module';
import {MenuModule} from './components/menu/menu.module';
import 'zone.js';
import {ControlsModule} from './components/controls/controls.module';
import {NgParticlesModule} from 'ng-particles';
import {SkillsModule} from './main/skills/skills.module';
import {MainScreenModule} from './main/main-screen/main-screen.module';
import {PortfolioModule} from './main/portfolio/portfolio.module';
import {FeedbackModule} from './main/feedback/feedback.module';
import {GetInTouchModule} from './main/get-in-touch/get-in-touch.module';
import {StoreModule} from '@ngrx/store';
import {layoutReducer} from './store/reducers/layout.reducer';
import {ClassicLayoutModule} from './main/classic-layout/classic-layout.module';
import {FooterModule} from './components/footer/footer.module';
import {ModernLayoutModule} from './main/modern-layout/modern-layout.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ngWebsiteTemplate'}),
    StoreModule.forRoot({uiState: layoutReducer}),
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
    FeedbackModule,
    ClassicLayoutModule,
    FooterModule,
    ModernLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
