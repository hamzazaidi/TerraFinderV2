import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeBlockComponent } from './fee-block.component';

describe('FeeBlockComponent', () => {
  let component: FeeBlockComponent;
  let fixture: ComponentFixture<FeeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
