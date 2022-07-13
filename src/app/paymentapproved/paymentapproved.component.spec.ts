import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentapprovedComponent } from './paymentapproved.component';

describe('PaymentapprovedComponent', () => {
  let component: PaymentapprovedComponent;
  let fixture: ComponentFixture<PaymentapprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentapprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentapprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
