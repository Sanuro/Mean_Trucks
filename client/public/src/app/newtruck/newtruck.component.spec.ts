import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtruckComponent } from './newtruck.component';

describe('NewtruckComponent', () => {
  let component: NewtruckComponent;
  let fixture: ComponentFixture<NewtruckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtruckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
