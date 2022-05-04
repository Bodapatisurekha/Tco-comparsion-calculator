import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Appcomponent } from './app.component';
import { SenddataService } from './senddata.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule
      ],
      declarations: [
        Appcomponent
      ],
      providers:[SenddataService]
    }).compileComponents();
  });

  


  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(Appcomponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  //it(`should have as title 'project'`, () => {
  //const fixture = TestBed.createComponent(Appcomponent);
 // const app = fixture.componentInstance;
   // expect(app.title).toEqual('project');
  // });    

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(Appcomponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('project app is running!');
  // });
});

