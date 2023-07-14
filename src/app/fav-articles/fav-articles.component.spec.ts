import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavArticlesComponent } from './fav-articles.component';

describe('FavArticlesComponent', () => {
  let component: FavArticlesComponent;
  let fixture: ComponentFixture<FavArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavArticlesComponent]
    });
    fixture = TestBed.createComponent(FavArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
