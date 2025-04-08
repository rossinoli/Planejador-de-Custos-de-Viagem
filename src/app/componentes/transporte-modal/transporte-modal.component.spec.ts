import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TransporteModalComponent } from './transporte-modal.component';

describe('TransporteModalComponent', () => {
  let component: TransporteModalComponent;
  let fixture: ComponentFixture<TransporteModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TransporteModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransporteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
