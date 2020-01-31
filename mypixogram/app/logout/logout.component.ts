import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(public auth : AuthenticationService) { }

  ngOnInit() {
    this.auth.logout();
  }

}
