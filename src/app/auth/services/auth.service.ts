import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  PASS_SESSION_ATTRIBUTE_NAME = 'authenticatedPass'

  public username: String;
  public password: String;

  constructor(private http: HttpClient) {

  }
  // Llamado a la API para lograr el login
  authenticationService(username: String, password: String) {
    return this.http.get(`http://localhost:8080/api/auth`,
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(username, password);
      }));
  }
  //añade los datos a sessionstorage
  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    sessionStorage.setItem(this.PASS_SESSION_ATTRIBUTE_NAME,password);
  }

  //se eliminan datos de sessionstorage para hacer el logout  
  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    sessionStorage.removeItem(this.PASS_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }


  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }
  getLoggedInPass() {
    let pass = sessionStorage.getItem(this.PASS_SESSION_ATTRIBUTE_NAME)
    if (pass === null) return ''
    return pass
  }
}