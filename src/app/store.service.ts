import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  fmdata;

  constructor() { }
  getData()
  {
    return this.fmdata;
  }

  setData(indata)
  {
    this.fmdata=indata;
  }
}
