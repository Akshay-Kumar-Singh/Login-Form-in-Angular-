/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SampletwoComponent } from './sampletwo.component';

describe('SampletwoComponent', () => {
  let component: SampletwoComponent;
  let fixture: ComponentFixture<SampletwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampletwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampletwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
