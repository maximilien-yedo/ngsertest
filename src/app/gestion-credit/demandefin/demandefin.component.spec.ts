import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandefinComponent } from './demandefin.component';

describe('DemandefinComponent', () => {
  let component: DemandefinComponent;
  let fixture: ComponentFixture<DemandefinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandefinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandefinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
