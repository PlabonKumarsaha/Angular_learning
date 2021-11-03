import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpyeeComponent } from './update-empyee.component';

describe('UpdateEmpyeeComponent', () => {
  let component: UpdateEmpyeeComponent;
  let fixture: ComponentFixture<UpdateEmpyeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmpyeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmpyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
