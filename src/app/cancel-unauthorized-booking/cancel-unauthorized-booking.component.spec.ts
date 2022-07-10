import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelUnauthorizedBookingComponent } from './cancel-unauthorized-booking.component';

describe('CancelUnauthorizedBookingComponent', () => {
  let component: CancelUnauthorizedBookingComponent;
  let fixture: ComponentFixture<CancelUnauthorizedBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelUnauthorizedBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelUnauthorizedBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
