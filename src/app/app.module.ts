import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Appcomponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ContainerComponent } from './container/container.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { AppRoutingModule } from './app-routing.module';
import { SenddataService } from './senddata.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations:[
    Appcomponent,
    HeaderComponent,
    ProductComponent,
    ContainerComponent,
    SuccessPageComponent,
    
   

  ],
  imports:[
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  
  
  ],
  providers:[SenddataService],
  bootstrap: [Appcomponent]
})
export class AppModule{}