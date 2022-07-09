import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizeduserPaymentComponent } from './unauthorizeduser-payment.component';

describe('UnauthorizeduserPaymentComponent', () => {
  let component: UnauthorizeduserPaymentComponent;
  let fixture: ComponentFixture<UnauthorizeduserPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthorizeduserPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthorizeduserPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
