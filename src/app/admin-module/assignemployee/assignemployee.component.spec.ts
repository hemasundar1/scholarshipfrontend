import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignemployeeComponent } from './assignemployee.component';

describe('AssignemployeeComponent', () => {
  let component: AssignemployeeComponent;
  let fixture: ComponentFixture<AssignemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
