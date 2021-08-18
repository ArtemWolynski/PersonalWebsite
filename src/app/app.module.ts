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
import {RecommendationsModule} from './main/feedback/recommendations.module';
import {GetInTouchModule} from './main/get-in-touch/get-in-touch.module';
import {StoreModule} from '@ngrx/store';
import {layoutReducer} from './store/reducers/layout.reducer';
import {ClassicLayoutModule} from './components/layout/classic-layout/classic-layout.module';
import {FooterModule} from './components/footer/footer.module';
import {ModernLayoutModule} from './components/layout/modern-layout/modern-layout.module';
import {EffectsModule} from '@ngrx/effects';
import {NavigationEffects} from './store/effects/navigation.effects';
import {navigationReducer} from './store/reducers/navigation.reducer';
import {skillsReducer} from './store/reducers/skills.reducer';
import {SkillsEffects} from './store/effects/skills.effects';
import {HttpClientModule} from '@angular/common/http';
import {recommendationsReducer} from './store/reducers/recommendations.reducer';
import {RecommendationsEffects} from './store/effects/recommendations-effects.service';
import {projectsReducer} from './store/reducers/projects.reducer';
import {ProjectsEffects} from './store/effects/projects.effects';
import {BREAKPOINTS, DEFAULT_BREAKPOINTS} from '@angular/flex-layout';
import {updateBreakpoints} from './shared/configs/breakpoints';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ngWebsiteTemplate'}),
    StoreModule.forRoot({
      uiState: layoutReducer,
      navigation: navigationReducer,
      skills: skillsReducer,
      recommendations: recommendationsReducer,
      projects: projectsReducer
    }),
    EffectsModule.forRoot(
      [
        NavigationEffects,
        SkillsEffects,
        RecommendationsEffects,
        ProjectsEffects,
      ]),
    AppRoutingModule,
    HttpClientModule,
    SidebarModule,
    ProgressBarModule,
    SkillTileModule,
    BrowserAnimationsModule,
    PortfolioModule,
    SkillsModule,
    MainScreenModule,
    RecommendationsModule,
    GetInTouchModule,

    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ButtonsModule,
    MenuModule,
    NgParticlesModule,
    ControlsModule,
    PortfolioModule,
    ClassicLayoutModule,
    FooterModule,
    ModernLayoutModule
  ],
  providers: [
    {
      provide: BREAKPOINTS,
      useFactory: function customizeBraskPoints() {
        return DEFAULT_BREAKPOINTS.map(updateBreakpoints);
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
