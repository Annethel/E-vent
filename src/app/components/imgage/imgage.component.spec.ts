import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgageComponent } from './imgage.component';

describe('ImgageComponent', () => {
  let component: ImgageComponent;
  let fixture: ComponentFixture<ImgageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
