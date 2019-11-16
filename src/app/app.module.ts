import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Router} from "@angular/router";
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DataService } from './data.service';
import{FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
  
  RouterModule.forRoot([
    {path:'',component:HomeComponent},
   {path:'home',component:HomeComponent},
   {path:'form',component:FormComponent}
  ])

  ],
  providers: [HttpClientModule,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
