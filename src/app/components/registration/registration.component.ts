import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { CrudService } from '../_services/crud.service';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../_helpers/must-match.validator';

interface User {
  Name: string;
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
  isRegistered = false;

  RegForm!: FormGroup

  @Input() userObj = { 
    id: '', 
    name: '', 
    email: '', 
    technology: '', 
    password: '', 
    //role: 'Student' 
  }

  public UserReg: User = {
    Name: '',
    Email: '',
    Password: '',
    ConfirmPassword: '',
    //Role: 'Student'
  };

  hidePass = true;
  
  constructor(
    //public crudService: CrudService, 
    public router: Router,
    private fb: FormBuilder
  ) { this.createForm(); }

  ngOnInit() { 
    if (this.isRegistered === true) {
      this.router.navigate(['/tests'])
    }
  }

  createForm() {
    this.RegForm = this.fb.group({
      Name: ['', Validators.required ],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      ConfirmPassword: ['', Validators.required ]
    },{
        validator: MustMatch('Password', 'ConfirmPassword')
      }
    );
  }

  //addUser(data: any) {
  //  if (this.RegForm.valid) {
  //    this.crudService.addUser(this.userObj).subscribe((data: {}) => {
  //      this.router.navigate(['/tests'])
  //    })
  //    this.isRegistered = true;
  //  }
  //}
}
