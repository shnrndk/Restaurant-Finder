import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRestaurantbyIdComponent } from './view-restaurantby-id.component';

describe('ViewRestaurantbyIdComponent', () => {
  let component: ViewRestaurantbyIdComponent;
  let fixture: ComponentFixture<ViewRestaurantbyIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRestaurantbyIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRestaurantbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
