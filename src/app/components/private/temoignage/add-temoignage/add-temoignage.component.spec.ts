import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTemoignageComponent } from './add-temoignage.component';

describe('AddTemoignageComponent', () => {
  let component: AddTemoignageComponent;
  let fixture: ComponentFixture<AddTemoignageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTemoignageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTemoignageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
