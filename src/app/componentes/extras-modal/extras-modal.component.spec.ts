import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExtrasModalComponent } from './extras-modal.component';

describe('ExtrasModalComponent', () => {
  let component: ExtrasModalComponent;
  let fixture: ComponentFixture<ExtrasModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ExtrasModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExtrasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
