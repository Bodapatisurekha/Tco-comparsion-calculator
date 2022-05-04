import { Component } from '@angular/core';
//import { SenddataService } from './senddata.service';
@Component({
  selector: 'app-root',
  templateUrl: './App.component.html',
  styleUrls: ['./App.component.scss'],
})
export class Appcomponent {
  title = 'project';
  sucess(item:any)
  {
    console.warn(item);
  }
 // constructor(private user:SenddataService){
   // this.user.getSurvey().subscribe((data: any)=>{
     // console.warn(data)
    //})
  //}
}   
  

