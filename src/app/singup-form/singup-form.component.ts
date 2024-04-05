import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { AuthService } from '../auth.service';
import { LoginValidators } from './login.validators';

@Component({
  selector: 'app-singup-form',
  templateUrl: './singup-form.component.html',
  styleUrls: ['./singup-form.component.css']
})
export class SingupFormComponent implements OnInit {

  form  = new FormGroup({
    account:new FormGroup({
      login:new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        LoginValidators.noSpace
      ],LoginValidators.isTaken),
      password:new FormControl(),
    })

  })

  get login(){
    return this.form.get('account.login')
  }

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  signIn(){
    let isValid =  this.authService.signIn(this.form.value);
    if (!isValid){
      this.form.setErrors({
        invalidLogin:true
      })
    }
  }

}
