import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { CrudService } from '../_services/crud.service';
import { MustMatch } from '../../_helpers/must-match.validator';

interface User {
  Email: string;
  Password: string;
  ConfirmPassword: string;
  //Role: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})

export class RegistrationComponent implements OnInit {
  isActive = false;

  RegForm!: FormGroup;

  @Input() userObj = { 
    id: '', 
    email: '', 
    password: '', 
    //role: 'User' 
  }

  public UserReg: User = {
    Email: '',
    Password: '',
    ConfirmPassword: '',
    //Role: 'User'
  };

  hidePass = true;
  
  constructor(
    //public crudService: CrudService, 
    public router: Router,
    private regFB: FormBuilder
  ) { this.createForm(); }

  ngOnInit() { 
    if (this.isActive === true) {
      this.router.navigate(['/profile'])
    }
  }

  createForm() {
    this.RegForm = this.regFB.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      ConfirmPassword: ['', Validators.required ]
    },{ validator: MustMatch('Password', 'ConfirmPassword') }
    );
  }

  //addUser(data: any) {
  //  if (this.RegForm.valid) {
  //    this.crudService.addUser(this.userObj).subscribe((data: {}) => {
  //      this.router.navigate(['/profile'])
  //    })
  //    this.isActive = true;
  //  }
  //}
}
