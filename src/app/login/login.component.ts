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
      gender: new FormControl('',[Validators.required,Validators.pattern("^(?:m|M|male|Male|f|F|female|Female)$")]),
      contact: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^(([0-9]*)|(([0-9]*)\.([0-9]*)))$")]),
      email: new FormControl('',[Validators.required,Validators.email]),
      pass: new FormControl('',[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
      cpass: new FormControl('',[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
      empId: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern("^(([0-9]*)|(([0-9]*)|([0-9]*)))$")])
    }
  );
  check:boolean;
  confirmme(){
    if(this.form.value.pass! == this.form.value.cpass)
    {
      this.check=false;
    }
    else{
      this.check=true;
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
      email: fidata.email,
      pass: fidata.pass,
      cpass:fidata.cpass,
      empId: fidata.empId,
      })
    }
  }

}
