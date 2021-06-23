import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  authenticated = false;

  constructor(private http: HttpClient) {
  }

  authenticate(credentials: any, callback: any) {
    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic' + btoa(credentials.username + ":" + credentials.password)
    } : {});

    this.http.get('user', {headers: headers}).subscribe( response => {
        if (response != null) {
          this.authenticated = true;
        }
        else {
          this.authenticated = false;
        }
        return callback && callback();
      });
  }


}
