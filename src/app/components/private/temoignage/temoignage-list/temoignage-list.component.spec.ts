import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemoignageListComponent } from './temoignage-list.component';

describe('TemoignageListComponent', () => {
  let component: TemoignageListComponent;
  let fixture: ComponentFixture<TemoignageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemoignageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemoignageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
