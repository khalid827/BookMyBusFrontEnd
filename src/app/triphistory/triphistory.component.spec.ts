import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriphistoryComponent } from './triphistory.component';

describe('TriphistoryComponent', () => {
  let component: TriphistoryComponent;
  let fixture: ComponentFixture<TriphistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriphistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriphistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
