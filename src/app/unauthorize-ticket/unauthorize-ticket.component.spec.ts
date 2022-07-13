import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizeTicketComponent } from './unauthorize-ticket.component';

describe('UnauthorizeTicketComponent', () => {
  let component: UnauthorizeTicketComponent;
  let fixture: ComponentFixture<UnauthorizeTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthorizeTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthorizeTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
