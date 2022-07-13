import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivecustomersComponent } from './inactivecustomers.component';

describe('InactivecustomersComponent', () => {
  let component: InactivecustomersComponent;
  let fixture: ComponentFixture<InactivecustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactivecustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InactivecustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
