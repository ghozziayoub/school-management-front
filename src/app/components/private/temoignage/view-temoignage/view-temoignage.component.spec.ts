import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTemoignageComponent } from './view-temoignage.component';

describe('ViewTemoignageComponent', () => {
  let component: ViewTemoignageComponent;
  let fixture: ComponentFixture<ViewTemoignageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTemoignageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTemoignageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
