import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByAuthorComponent } from './by-author.component';

describe('ByAuthorComponent', () => {
  let component: ByAuthorComponent;
  let fixture: ComponentFixture<ByAuthorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByAuthorComponent]
    });
    fixture = TestBed.createComponent(ByAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
