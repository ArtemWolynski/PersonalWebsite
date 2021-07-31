import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassicLayoutComponent } from './classic-layout.component';
import {MainScreenModule} from '../main-screen/main-screen.module';
import {SidebarModule} from '../../components/sidebar/sidebar.module';
import {SkillsModule} from '../skills/skills.module';
import {FooterModule} from '../../components/footer/footer.module';
import {PortfolioModule} from '../portfolio/portfolio.module';
import {FeedbackModule} from '../feedback/feedback.module';
import {GetInTouchModule} from '../get-in-touch/get-in-touch.module';



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
    FeedbackModule,
    GetInTouchModule
  ],
  exports: [
    ClassicLayoutComponent
  ]
})
export class ClassicLayoutModule { }
