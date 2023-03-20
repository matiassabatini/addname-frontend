import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnamesComponent } from './addnames.component';

describe('AddnamesComponent', () => {
  let component: AddnamesComponent;
  let fixture: ComponentFixture<AddnamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
