import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenddataService {

  constructor(private http: HttpClient) { }

  postSurvey(user:any){
    return this.http.post('http://localhost:1337/survey',user)

  }

  getSurvey(user: any){
    console.log("In get SUrvey")
    
  }
  // infrastructure = new Subject<string>();                      
  // currency = new Subject<string>();
  // virtual = new Subject<string>();
  // product = new Subject<string>();
  // host = new Subject<string>();
  // storage = new Subject<string>();
  // electricity = new Subject<string>();
  // slider= new Subject<string>();
  // range= new Subject<string>();
 
  // updateChoseninfrastructure(infacontainer:any): void {
  //   this.infrastructure.next(infacontainer);
  // }

  // updateChosencurrency(currcontainer:any): void {
  //   this.currency.next(currcontainer);
  // }

  // updateChosenvirtual(vmNumbercontainer:any): void {
  //   this.virtual.next(vmNumbercontainer);
  // }

  // updateChosenproduct(compcontainer:any): void {
  //   this.product.next(compcontainer);
  // }

  // updateChosenhost(virtcontainer:any): void {
  //   this.host.next(virtcontainer);
  // }

  // updateChosenstorage(storcontainer:any): void {
  //   this.storage.next(storcontainer);
  // }

  // updateChosenelectricity(eleccontainer:any): void {
  //   this.electricity.next(eleccontainer);
  // }

  // updateChosenslider(slidercontainer:any): void {
  //   this.slider.next(slidercontainer);
  // }

  // updateChosenrange(rangecontainer:any): void {
  //   this.range.next(rangecontainer);
  // }
  
}
