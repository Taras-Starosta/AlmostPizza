import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { CrudService } from '../_services/crud.service';
//import { MustMatch } from '../_helpers/must-match.validator';

interface User {
  Email: string;
  Password: string;
  //Role: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  isActive = false;

  LoginForm!: FormGroup;

  @Input() userObj = { 
    id: '', 
    email: '', 
    password: '', 
    //role: 'User' 
  }

  public UserReg: User = {
    Email: '',
    Password: '',
    //Role: 'User'
  };

  hidePass = true;
  
  constructor(
    //public crudService: CrudService, 
    public router: Router,
    private loginFB: FormBuilder
  ) { this.createForm(); }

  ngOnInit() { 
    if (this.isActive === true) {
      this.router.navigate(['/profile'])
    }
  }

  createForm() {
    this.LoginForm = this.loginFB.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    }//,{ validator: MustMatch('Password', 'ConfirmPassword') }
    );
  }

  //addUser(data: any) {
  //  if (this.LoginForm.valid) {
  //    this.crudService.addUser(this.userObj).subscribe((data: {}) => {
  //      this.router.navigate(['/profile'])
  //    })
  //    this.isActive = true;
  //  }
  //}
}