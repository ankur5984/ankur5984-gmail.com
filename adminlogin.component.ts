import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { ChildService } from '../service/child.service';
import { Router } from '@angular/router';
import { User } from '../Model/User';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  user = '';
  Password = '';
  Status: Boolean = false;
  childlist:any = [];
  user1: any;
  constructor(private auth: AuthenticationService, private route: Router, private child: ChildService) { }

  ngOnInit() {
  }

  signIn(user: User) {
    console.log(user);
    this.auth.loginapi(user).subscribe(
         data => {

          this.user1 = data;
          sessionStorage.setItem('user', this.user1.name);
          sessionStorage.setItem('id', this.user1.userId);
          if (data) {
          this.route.navigate(['admin']);
         }
         },
         error => {
           this.Status = true;
           console.log(error.Status);
         }

    );
   }

}
