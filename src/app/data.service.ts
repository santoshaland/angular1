import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }
  reg(c)
  {
    return this.http.post("http://localhost:4000/register",c);
  }
}
