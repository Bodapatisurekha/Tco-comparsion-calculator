import { HttpClient, HttpClientModule, HttpContext } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { resolve } from 'dns';
import { SenddataService } from '../senddata.service';

import { ContainerComponent } from './container.component';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerComponent ],
      imports: [
        RouterTestingModule, HttpClientModule, FormsModule
      ],
      providers:[SenddataService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
 });

 it('Should be onCreate', ()=>{
  component.infrastructure = 'Creating a new infrastructure';
  fixture.detectChanges();
  expect(component.onCreate).toBeTruthy();
  component.onCreate();
 });

 it('Should be onCreate1', ()=>{
  component.infrastructure = "Upgrading to vCloud suite";
  fixture.detectChanges();
  expect(component.onCreate1).toBeTruthy();
  component.onCreate1();
 });

 it('Should be ShowHideButton', ()=>{
  expect(component.ShowHideButton).toBeTruthy();
  component.ShowHideButton();
 });

 it('Should be  onCurrency', ()=>{
  expect(component.onCurrency).toBeTruthy();
  component.onCurrency(eval);
 
 });

 it('Should be  onVirtual', ()=>{
  expect(component. onVirtual(eval)).toBe();
  component.onVirtual(eval);
 });

 it('Should be  onProduct', ()=>{
  expect(component.onProduct).toBeTruthy();
  component.onProduct(eval);
 });

 it('Should be  onhost', ()=>{
  expect(component.onhost).toBeTruthy();
  component.onhost(eval);
 });

 it('Should be  onstorage', ()=>{
  expect(component.onstorage).toBeTruthy();
  component.onstorage(eval);
 });

 it('Should be  onelectricity', ()=>{
  expect(component.onelectricity).toBeTruthy();
  component.onelectricity(eval);
 
 });
 it('Should be  ondatacenter', ()=>{
  expect(component.ondatacenter).toBeTruthy();
  component.ondatacenter(eval);
 
 });

 it('Should be  onslider', ()=>{
  expect(component. onslider).toBeTruthy();
  component. onslider(eval);
 });
 it('Should be  onslider1', ()=>{
  expect(component. onslider1).toBeTruthy();
  component. onslider1(eval);
 });

 it('Should be  onrange', ()=>{
  expect(component. onrange).toBeTruthy();
  component. onrange(eval);
 });

});