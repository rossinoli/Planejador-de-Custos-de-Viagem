import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComidaModalComponent } from './comida-modal.component';

describe('ComidaModalComponent', () => {
  let component: ComidaModalComponent;
  let fixture: ComponentFixture<ComidaModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ComidaModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComidaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
