import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDistributionByCategoryComponent } from './film-distribution-by-category.component';

describe('FilmDistributionByCategoryComponent', () => {
  let component: FilmDistributionByCategoryComponent;
  let fixture: ComponentFixture<FilmDistributionByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmDistributionByCategoryComponent]
    });
    fixture = TestBed.createComponent(FilmDistributionByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
