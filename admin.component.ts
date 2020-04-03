import { Component, OnInit } from '@angular/core';
import { ChildService } from '../service/child.service';
import { AdminService } from '../service/admin.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  child:any;
  constructor(private svc:ChildService,private adm:AdminService,private route:Router) { 

   
   
  }

  currentNeed(){
    this.route.navigate(['admincneed']);
  }

  ngOnInit() {
    this. refreshChild();
    sessionStorage.setItem('auth',"hello");
  }


  refreshChild(){
    this.svc.childlist().subscribe(data=>
      {
        this.child=data;
        console.log(data);
       
      }
    
      
      )
  }

  deleteChild(id)
  {

    sessionStorage.getItem('auth');
    console.log("Hello");
    this.adm.childDelete(id).subscribe(data=>
      {
        console.log(data);
        this. refreshChild();
      }
      
      )
 }
  


  updateChild()
  {


  }
}
