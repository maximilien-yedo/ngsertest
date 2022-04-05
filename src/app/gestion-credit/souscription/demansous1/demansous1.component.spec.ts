import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demansous1Component } from './demansous1.component';

describe('Demansous1Component', () => {
  let component: Demansous1Component;
  let fixture: ComponentFixture<Demansous1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demansous1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demansous1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
