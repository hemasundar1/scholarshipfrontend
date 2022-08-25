import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeehomepageComponent } from './employeehomepage.component';

describe('EmployeehomepageComponent', () => {
  let component: EmployeehomepageComponent;
  let fixture: ComponentFixture<EmployeehomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeehomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeehomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
