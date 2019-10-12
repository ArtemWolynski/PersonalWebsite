import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent implements OnInit {
  @Input() classicMode = false;
  @Input() mobileMode = false;
  getInTouchForm;
  interval;
  isActive: boolean;

  testText = '';

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

    this.getInTouchForm.valueChanges.subscribe(value =>
    {
      if (value.name || value.email || value.message) {
        this.isActive = true;
        this.makeMagic();
      } else {
        this.isActive = false;
        this.testText = '';
      }
    })
  }

  makeMagic() {
    let text = `Oh! Hi Dude! This is a random text I'm writing to find out how it looks like on a real screen` ;
    let interval = 0;
    setTimeout(()=> {
      this.interval = setInterval(()=> {
        this.testText += text[interval];
        interval++;
        if (interval >= text.length) {
          clearInterval(this.interval);
        }}, 70);
    }, 750);
  }

}
