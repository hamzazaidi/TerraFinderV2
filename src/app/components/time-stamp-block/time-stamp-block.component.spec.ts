import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeStampBlockComponent } from './time-stamp-block.component';

describe('TimeStampBlockComponent', () => {
  let component: TimeStampBlockComponent;
  let fixture: ComponentFixture<TimeStampBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeStampBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeStampBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
