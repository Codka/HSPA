import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
loggedinUser:string;
  constructor(private alertifyService:AlertifyService) { }

  ngOnInit() {
  }
loggedIn(){
  this.loggedinUser = localStorage.getItem('token');
  return this.loggedinUser;
}
onLogout(){
  localStorage.removeItem('token');
  this.alertifyService.success("You are logged out!");
}
}
