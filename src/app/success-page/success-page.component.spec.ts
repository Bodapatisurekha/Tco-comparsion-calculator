import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessPageComponent } from './success-page.component';

describe('SuccessPageComponent', () => {
  let component: SuccessPageComponent;
  let fixture: ComponentFixture<SuccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Success Page Content', () => {
    const fixture = TestBed.createComponent(SuccessPageComponent);
    fixture.detectChanges();
     const compiled = fixture.nativeElement;
     expect(compiled.querySelector('.icons h1').textContent).toContain('Your information has been submitted successfully!');
  });
});