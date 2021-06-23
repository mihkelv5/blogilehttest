import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../user/user-service";
import {User} from "../user/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent implements OnInit {
  @Input()
  username: string = {} as string;
  password: string = {} as string;

  constructor(private service: UserService, private router: Router) {

  }

  ngOnInit(): void {
  }

  public doLogin(){
    this.service.authenticate(this.username, this.password);
  }

}
