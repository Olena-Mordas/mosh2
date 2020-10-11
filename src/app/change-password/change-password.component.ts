import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidators } from './change-password.validator';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent{

  form;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPass: ['', Validators.required, PasswordValidators.matchOld],
      newPassword: fb.group({
        newPass: ['', Validators.required],
        confirmPass: ['', Validators.required]
      },
      {
        validators: [Validators.required],
        asyncValidators: [PasswordValidators.confirmPass],
        updateOn: 'blur'
      })
    })
  }

  get oldPass(){
    return this.form.get('oldPass');
  }

  get newPassword(){
    return this.form.get('newPassword');
  }

  get newPass(){
    return this.form.get('newPassword.newPass');
  }

  get confirmPass(){
    console.log(this.form.get('newPassword.confirmPass'));
    return this.form.get('newPassword.confirmPass');
  }

  log(t){console.log(t);}
  

}
