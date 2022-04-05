import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demansous2Component } from './demansous2.component';

describe('Demansous2Component', () => {
  let component: Demansous2Component;
  let fixture: ComponentFixture<Demansous2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demansous2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demansous2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
