import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10CustomerComponent } from './top10-customer.component';

describe('Top10CustomerComponent', () => {
  let component: Top10CustomerComponent;
  let fixture: ComponentFixture<Top10CustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Top10CustomerComponent]
    });
    fixture = TestBed.createComponent(Top10CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
