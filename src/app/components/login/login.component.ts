import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  isActive = false;
  LoginForm!: FormGroup;
  hidePass = true;
  
  constructor(
    public router: Router,
    private loginFB: FormBuilder,
    private http: HttpClient
  ) { this.createForm(); }

  ngOnInit() { 
    if (this.isActive === true) {
      this.router.navigate(['/profile'])
    }
  }

  createForm() {
    this.LoginForm = this.loginFB.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    });
  }

  checkUser(users: {email: string, password: string}) {
    console.log(users);
    
  }
}