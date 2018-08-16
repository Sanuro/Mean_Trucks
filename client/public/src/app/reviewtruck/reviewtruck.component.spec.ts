import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewtruckComponent } from './reviewtruck.component';

describe('ReviewtruckComponent', () => {
  let component: ReviewtruckComponent;
  let fixture: ComponentFixture<ReviewtruckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewtruckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewtruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
