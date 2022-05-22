import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxHashLinkComponent } from './tx-hash-link.component';

describe('TxHashLinkComponent', () => {
  let component: TxHashLinkComponent;
  let fixture: ComponentFixture<TxHashLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxHashLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxHashLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
