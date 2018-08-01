import { Component, OnInit } from '@angular/core';
import {FormControl ,FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup=new FormGroup(
    {
      fname: new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z]+$")]),
      lname: new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z]+$")]),
      gender: new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z]+$")]),
      contact: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^(([0-9]*)|(([0-9]*)\.([0-9]*)))$")]),
      pass: new FormControl('',[Validators.required,Validators.pattern("(?=^.{8,16}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*")]),
      cpass: new FormControl('',[Validators.required,Validators.pattern("(?=^.{8,16}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*")]),
      empId: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern("^(([0-9]*)|(([0-9]*)|([0-9]*)))$")])
    }
  );
  confirmme(){
    if(this.form.value.pass! == this.form.value.cpass)
    {
      return false;
    }
    else{
      return true;
    }
  }

  constructor(private router:Router) { 
  }
  
  nextpage(){
    localStorage.setItem("fdata",JSON.stringify(this.form.value));
    this.router.navigate(['/nextpg']);
  }

  ngOnInit() {
    if(this.router.url==='/form')
    {
      let fidata=JSON.parse(localStorage.getItem("fdata"))
      this.form.patchValue({
      fname: fidata.fname,
      lname: fidata.lname,
      gender: fidata.gender,
      contact: fidata.contact,
      pass: fidata.pass,
      cpass:fidata.cpass,
      empId: fidata.empId,
      })
    }
  }

}
