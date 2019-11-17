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
  isTyping: boolean;

  firstLineText = '';
  secondLineText = '';
  thirdLineText = '';

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

    // this.getInTouchForm.valueChanges.subscribe(value =>
    // {
    //   if (value.name || value.email || value.message) {
    //     this.isActive = true;
    //   } else {
    //     this.isActive = false;
    //     this.firstLineText = '';
    //   }
    // })
  }

  setFirstLine(text) {
    this.setActive();

    if (!this.isTyping) {
      this.isTyping = true;
      let firstLine = `Oh! Hi ${text}`;
      let index = 0;
      setTimeout(()=> {
        this.firstLineText = '';
        this.interval = setInterval(()=> {
          this.firstLineText += firstLine[index];
          index++;
          if (index >= firstLine.length) {
            clearInterval(this.interval);
            this.isTyping = false;
          }}, 70);
      }, 750)
    }
  }

  setSecondLine(text) {
    this.setActive();

    if (!this.isTyping) {
      this.isTyping = true;
      let secondLine = `It's good to see you thriving, ${text}`;
      let index = 0;
      setTimeout(()=> {
        this.secondLineText = '';
        this.interval = setInterval(()=> {
          this.secondLineText += secondLine[index];
          index++;
          if (index >= secondLine.length) {
            clearInterval(this.interval);
            this.isTyping = false;
          }}, 70);
      }, 750)
    }
  }

  setThirdLine(text) {
    this.setActive();

    if (!this.isTyping) {
      this.isTyping = true;
      let thirdLine = `Now just hit the 'submit' button! The rest is a history`;
      let index = 0;
      setTimeout(()=> {
        this.thirdLineText = '';
        this.interval = setInterval(()=> {
          this.thirdLineText += thirdLine[index];
          index++;
          if (index >= thirdLine.length) {
            clearInterval(this.interval);
            this.isTyping = false;
          }}, 70);
      }, 750)
    }
  }

  setActive() {
    if (!this.isActive) {
      this.isActive = true;
    }
  }

  writeLine(line, text) {
   ;
  }

  makeMagic(value) {
  }

}
