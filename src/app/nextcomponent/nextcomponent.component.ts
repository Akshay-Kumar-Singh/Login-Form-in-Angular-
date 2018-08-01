import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nextcomponent',
  templateUrl: './nextcomponent.component.html',
  styleUrls: ['./nextcomponent.component.css']
})
export class NextcomponentComponent implements OnInit {
 
  fidata:Object
 constructor(private router: Router) {
   this.fidata=JSON.parse(localStorage.getItem("fdata"));

  }
  back()
  {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
