import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-confirmation',
  templateUrl: './registration-confirmation.component.html',
  styleUrls: ['./registration-confirmation.component.sass']
})
export class RegistrationConfirmationComponent {
  public token: string = "";
  
  constructor(private router: Router, private http: HttpClient) {  }
  
  ngOnInit(): void { this.getToken(); }
  
  getToken() {
    const getToken = this.router.url.split('/').pop();
    
    if (getToken) { this.token = getToken; }
    
    const Token = { "message": this.token }
    
    console.log(Token);
    
    return this.http.post("http://localhost:9000/auth/confirm", Token).subscribe((res) => { console.log(res); })
  }
}