import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedBookingComponent } from './unauthorized-booking.component';

describe('UnauthorizedBookingComponent', () => {
  let component: UnauthorizedBookingComponent;
  let fixture: ComponentFixture<UnauthorizedBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthorizedBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthorizedBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
