import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SampletwoComponent } from './sampletwo/sampletwo.component';

import { RouterModule, Routes  } from '@angular/router'

const routes : Routes = [{
  path : 'sample',
  component : SampletwoComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    SampletwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
