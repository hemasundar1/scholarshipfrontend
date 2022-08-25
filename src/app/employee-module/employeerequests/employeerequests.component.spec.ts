import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeerequestsComponent } from './employeerequests.component';

describe('EmployeerequestsComponent', () => {
  let component: EmployeerequestsComponent;
  let fixture: ComponentFixture<EmployeerequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeerequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeerequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
