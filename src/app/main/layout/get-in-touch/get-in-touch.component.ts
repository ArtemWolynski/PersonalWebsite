import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent implements OnInit {

  getInTouchForm;

  constructor(private _formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    console.log('test');
  }

  initForm() {
    this.getInTouchForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

}
