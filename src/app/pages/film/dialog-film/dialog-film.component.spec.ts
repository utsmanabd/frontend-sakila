import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFilmComponent } from './dialog-film.component';

describe('DialogFilmComponent', () => {
  let component: DialogFilmComponent;
  let fixture: ComponentFixture<DialogFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogFilmComponent]
    });
    fixture = TestBed.createComponent(DialogFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
