import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowunauthorizedbookingsComponent } from './showunauthorizedbookings.component';

describe('ShowunauthorizedbookingsComponent', () => {
  let component: ShowunauthorizedbookingsComponent;
  let fixture: ComponentFixture<ShowunauthorizedbookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowunauthorizedbookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowunauthorizedbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
