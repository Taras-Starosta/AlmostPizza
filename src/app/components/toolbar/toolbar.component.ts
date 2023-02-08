import { Component, Input, OnInit, ViewChild } from '@angular/core';
//import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {
  //@ViewChild('getFromReg', { read: RegistrationComponent, static: false })
  //getFromReg!: RegistrationComponent
  //@Input() Active: any

  ngOnInit() {
      //this.Active=this.getFromReg.isActive;
  }
}
