import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignrequestComponent } from './assignrequest.component';

describe('AssignrequestComponent', () => {
  let component: AssignrequestComponent;
  let fixture: ComponentFixture<AssignrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
