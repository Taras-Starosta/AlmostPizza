import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {
  RegForm!: FormGroup;
  hidePass = true;
  
  constructor(
    public router: Router,
    private regFB: FormBuilder,
    private http: HttpClient
  ) { this.createForm(); }
  
  ngOnInit() { }
  
  createForm() {
    this.RegForm = this.regFB.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    });
  }
  
  addUser(users: { email: string, password: string }) {
    console.log(users);
    return this.http.post('http://localhost:9000/auth/register', users).subscribe((res) => { console.log(res); });
  }
}
