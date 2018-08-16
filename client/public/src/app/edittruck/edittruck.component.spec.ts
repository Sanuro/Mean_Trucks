import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittruckComponent } from './edittruck.component';

describe('EdittruckComponent', () => {
  let component: EdittruckComponent;
  let fixture: ComponentFixture<EdittruckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittruckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
