import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanRegisterComponent } from './loan-register.component';

describe('LoanRegisterComponent', () => {
  let component: LoanRegisterComponent;
  let fixture: ComponentFixture<LoanRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
