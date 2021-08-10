import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassicLayoutComponent } from './classic-layout.component';
import {MainScreenModule} from '../../../main/main-screen/main-screen.module';
import {SidebarModule} from '../../sidebar/sidebar.module';
import {SkillsModule} from '../../../main/skills/skills.module';
import {FooterModule} from '../../footer/footer.module';
import {PortfolioModule} from '../../../main/portfolio/portfolio.module';
import {RecommendationsModule} from '../../../main/feedback/recommendations.module';
import {GetInTouchModule} from '../../../main/get-in-touch/get-in-touch.module';



@NgModule({
  declarations: [
    ClassicLayoutComponent
  ],
  imports: [
    CommonModule,
    MainScreenModule,
    SidebarModule,
    SkillsModule,
    FooterModule,
    PortfolioModule,
    RecommendationsModule,
    GetInTouchModule
  ],
  exports: [
    ClassicLayoutComponent
  ]
})
export class ClassicLayoutModule { }
