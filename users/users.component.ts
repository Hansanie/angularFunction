import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any;

  constructor(private userData: UsersService) { }

  ngOnInit() {
    this.userData.getUsers().subscribe(
      res => this.users = res
    )
  }

}
