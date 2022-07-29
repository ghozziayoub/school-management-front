import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTemoignageComponent } from './update-temoignage.component';

describe('UpdateTemoignageComponent', () => {
  let component: UpdateTemoignageComponent;
  let fixture: ComponentFixture<UpdateTemoignageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTemoignageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTemoignageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
