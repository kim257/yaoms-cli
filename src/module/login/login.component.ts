import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  // styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
  public model: any = {};

  constructor() {
    this.activate();
  }

  public activate() {
    console.log('controller login work');
    this.model = {
      username: '',
      password: ''
    };
  }

  public ngOnInit() {
  }

  public login() {
  }
}
