import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HospedagemModalComponent } from './hospedagem-modal.component';

describe('HospedagemModalComponent', () => {
  let component: HospedagemModalComponent;
  let fixture: ComponentFixture<HospedagemModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HospedagemModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HospedagemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
