import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StoreService} from '../store.service';

@Component({
  selector: 'app-nextcomponent',
  templateUrl: './nextcomponent.component.html',
  styleUrls: ['./nextcomponent.component.css']
})
export class NextcomponentComponent implements OnInit {
 
  fidata:Object
 constructor(private router: Router, private fmdata: StoreService) {
   //this.fidata=JSON.parse(localStorage.getItem("fdata"));
   this.fidata=this.fmdata.getData();

  }
  back()
  {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
