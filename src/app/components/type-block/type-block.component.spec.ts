import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBlockComponent } from './type-block.component';

describe('TypeBlockComponent', () => {
  let component: TypeBlockComponent;
  let fixture: ComponentFixture<TypeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
