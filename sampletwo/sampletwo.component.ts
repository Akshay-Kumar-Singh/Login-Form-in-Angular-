import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sampletwo',
  templateUrl: './sampletwo.component.html',
  styleUrls: ['./sampletwo.component.css']
})
export class SampletwoComponent  {

  constructor() { 
    var key = localStorage.getItem('key')
    console.log(key,"in second component");
  }

 
}
