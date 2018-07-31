import { Component, OnInit } from '@angular/core';
import {FormControl ,FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';
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
      contact: new FormControl('',[Validators.required,Validators.pattern("^(([0-9]*)|(([0-9]*)\.([0-9]*)))$")]),
      email: new FormControl('',[Validators.required,Validators.email]),
      pass: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(16)]),
      cpass: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(16)]),
      empId: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern("^(([0-9]*)|(([0-9]*)\.([0-9]*)))$")])
    }
  )

  onclick(){
    localStorage.setItem("fdata",JSON.stringify(this.form.value));
  }

  constructor() { }

  ngOnInit() {
  }

}
