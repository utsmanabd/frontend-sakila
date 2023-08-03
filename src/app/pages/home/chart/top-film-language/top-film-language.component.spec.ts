import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFilmLanguageComponent } from './top-film-language.component';

describe('TopFilmLanguageComponent', () => {
  let component: TopFilmLanguageComponent;
  let fixture: ComponentFixture<TopFilmLanguageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopFilmLanguageComponent]
    });
    fixture = TestBed.createComponent(TopFilmLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
