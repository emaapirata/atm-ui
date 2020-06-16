import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage = 'Invalid Credentials';
  successMessage: string; 
  invalidLogin = false;
  loginSuccess = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthenticationService) {
               }

  ngOnInit(): void {
  }

  handleLogin(){
    this.authService.authenticationService(this.username, this.password).subscribe((result)=>{
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Succesful';
      this.router.navigated = false;
      this.router.navigateByUrl('/home');
    },()=>{
      this.invalidLogin = true;
      this.loginSuccess = false;
    })
  }

}
