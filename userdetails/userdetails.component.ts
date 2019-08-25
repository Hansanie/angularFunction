import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  user:any;

  constructor(private userData: UsersService, private route:ActivatedRoute) {
    this.route.params.subscribe(params => this.user = params.id)
   }

  ngOnInit() {
    this.userData.getUser(this.user).subscribe(
      res => this.user = res
    )
  }

}
