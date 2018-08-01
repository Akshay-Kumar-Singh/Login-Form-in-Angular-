import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule,FormControl} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NextcomponentComponent } from './nextcomponent/nextcomponent.component';

const route: Routes = [
  { path: 'nextpg',
   component: NextcomponentComponent },
   {path: '',
    component: LoginComponent},
    {path: 'login',
    component: LoginComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NextcomponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}
 
