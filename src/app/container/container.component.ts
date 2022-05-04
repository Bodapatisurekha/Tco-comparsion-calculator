import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SenddataService } from '../senddata.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  
  showMainContent:Boolean=true;
  infrastructure  = '';
  Currency = "";
  Virtual="";
  Product = "";
  host='';
  storage='';
  electricity='';
  datacenter='';
  slider='';
  slider1='';
  range='';
  
  
  constructor( private router:Router, private sendData: SenddataService, private http:HttpClient) { 

    }
  ShowHideButton(){
    this.showMainContent = this.showMainContent ? false : true;
  }

  onCreate(){
    // alert("working")
    this.infrastructure = "Creating a new infrastructure"
  }

  onCreate1(){
    // alert("working")
    this.infrastructure  = "Upgrading to vCloud suite"
  }
  onCurrency(value:any){
    // alert(value)
    this.Currency = value
   
  }
  onVirtual(value:any) {
    this.Virtual= value
  }
  onProduct(value:any){
    this.Product = value
  }
  onhost(value:any){
    this.host = value
  }
  onstorage(value:any){
    this.storage = value
  }
  onelectricity(value:any){
    this.electricity= value
  }
  ondatacenter(value:any){
    this.datacenter= value
  }
  onslider(val:any){
    this.slider = val.target.value;
  }
  onslider1(val:any){
    this.slider1 = val.target.value;
  }
  onrange(val:any){
    this.range = val.target.value;
  }
 
  
  submit(TcoForm:any){
    this.sendData.postSurvey(TcoForm.value).subscribe((data)=>{
      console.log(TcoForm.value)
    })
    this.router.navigate(['/success']);
  }

  
               
  onPost(postdata:any): void {
   
  // }
  // postFetch(): void {
  //   this.http.get('http://localhost:1337/survey').subscribe((posts:any) => {
  //     console.log(posts);
  //     });
  }
}


