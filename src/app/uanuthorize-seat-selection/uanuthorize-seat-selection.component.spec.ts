import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UanuthorizeSeatSelectionComponent } from './uanuthorize-seat-selection.component';

describe('UanuthorizeSeatSelectionComponent', () => {
  let component: UanuthorizeSeatSelectionComponent;
  let fixture: ComponentFixture<UanuthorizeSeatSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UanuthorizeSeatSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UanuthorizeSeatSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
