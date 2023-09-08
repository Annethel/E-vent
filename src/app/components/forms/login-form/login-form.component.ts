import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from 'src/app/models/data/login.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  form: FormGroup;
  constructor(private authentication: AuthenticationService, private fb: FormBuilder){
    this.form = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    })
  } 
  onSubmit(){
     // console.log(this.form.value)
     const request :LoginRequest = {
      email:this.form.get('email')?.value,
      password:this.form.get('password')?.value
    }
    this.authentication.login(request).subscribe();
  }

}
