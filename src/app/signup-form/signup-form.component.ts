import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', 
                [UsernameValidators.cannotContainSpace, Validators.required, Validators.minLength(3)],
                UsernameValidators.shouldbeUnquie),
      password: new FormControl(),
    })
  });    

  get username (){
    return this.form.get('account.username');
  }

  login(){
    let valid = false; //=authService.login(this.form.value);
    if(!valid){
      this.form.setErrors({invalidLogin:true});
    }
  }
}
