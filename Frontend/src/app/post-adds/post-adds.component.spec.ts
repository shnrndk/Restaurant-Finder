import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAddsComponent } from './post-adds.component';

describe('PostAddsComponent', () => {
  let component: PostAddsComponent;
  let fixture: ComponentFixture<PostAddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
