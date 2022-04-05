import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandePretComponent } from './demande-pret.component';

describe('DemandePretComponent', () => {
  let component: DemandePretComponent;
  let fixture: ComponentFixture<DemandePretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandePretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandePretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
