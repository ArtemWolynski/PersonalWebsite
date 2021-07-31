import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GetInTouchComponent} from './get-in-touch.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ButtonsModule} from '../../components/buttons/buttons.module';



@NgModule({
    declarations: [
        GetInTouchComponent
    ],
    exports: [
        GetInTouchComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        ButtonsModule
    ]
})
export class GetInTouchModule { }
