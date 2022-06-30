import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageList2Component } from './message-list2.component';

describe('MessageList2Component', () => {
  let component: MessageList2Component;
  let fixture: ComponentFixture<MessageList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageList2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
