import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddsComponent } from './view-adds.component';

describe('ViewAddsComponent', () => {
  let component: ViewAddsComponent;
  let fixture: ComponentFixture<ViewAddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
