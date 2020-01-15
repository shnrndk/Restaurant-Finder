import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestToAddRestaurantComponent } from './request-to-add-restaurant.component';

describe('RequestToAddRestaurantComponent', () => {
  let component: RequestToAddRestaurantComponent;
  let fixture: ComponentFixture<RequestToAddRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestToAddRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestToAddRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
