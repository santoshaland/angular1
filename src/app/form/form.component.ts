import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
message;
  constructor(public service:DataService) { }

  ngOnInit() {
  }

  Register(c)
  {

    console.log(c);

    let status=this.service.reg(c);
    status.subscribe((result:any)=>{
     if(result.error==null)
     {
       this.message="Successfully Registered";
     }
     else
     {
       this.message="Please enter valid data";
     }
    })
  }

}
