import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorningAlerComponent } from './worning-aler.component';

describe('WorningAlerComponent', () => {
  let component: WorningAlerComponent;
  let fixture: ComponentFixture<WorningAlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorningAlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorningAlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
