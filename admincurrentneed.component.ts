import { Component, OnInit } from '@angular/core';
import { AdmincurrentneedService } from '../service/admincurrentneed.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admincurrentneed',
  templateUrl: './admincurrentneed.component.html',
  styleUrls: ['./admincurrentneed.component.css']
})
export class AdmincurrentneedComponent implements OnInit {
  admin: any;
  msg: any;
  images: any;
  constructor(public dataService: AdmincurrentneedService, public router:RouterModule) { }


  onSelectFile(event) {
    this.images = event.target.files[0];
}
  add(formdata) {
    console.log(formdata.form.value);
    this.admin = formdata.form.value;

    console.log(this.admin);
    this.dataService.addChild(this.admin, this.images).subscribe((res) => {
      console.log(res);
      this.msg = 'Record added succesfully';
    
    }
    );

  }

  ngOnInit() {
  }

}
