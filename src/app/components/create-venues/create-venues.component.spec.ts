import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVenuesComponent } from './create-venues.component';

describe('CreateVenuesComponent', () => {
  let component: CreateVenuesComponent;
  let fixture: ComponentFixture<CreateVenuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVenuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
