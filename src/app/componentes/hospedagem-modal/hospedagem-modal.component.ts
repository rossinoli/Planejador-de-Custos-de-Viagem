import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { IonicModule, ModalController } from '@ionic/angular';

import { HospedagemService } from '../../serviço/hospedagem.service';
import { CustoService } from '../../serviço/custo.service';

@Component({
  selector: 'app-hospedagem-modal',
  templateUrl: './hospedagem-modal.component.html',
  styleUrls: ['./hospedagem-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HospedagemModalComponent  implements OnInit {

    
    private modalCtrl = inject(ModalController);
    private accommodationService = inject(HospedagemService);
    private costService = inject(CustoService);
  
    
    nights: number | null = null;
    people: number | null = null;
    costPerNightPerPerson: number | null = null; 
  
    calculatedCost: number = 0;

  constructor() { }

  ngOnInit() {}
  calculate() {
    this.calculatedCost = this.accommodationService.calculateCost({
      nights: this.nights,
      people: this.people,
      costPerNightPerPerson: this.costPerNightPerPerson
    });
  }

  
  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  
  saveAndClose() {
    this.calculate(); 
    this.costService.updateAccommodationCost(this.calculatedCost);
    this.modalCtrl.dismiss(null, 'confirm');
  }

  
  onInputChange() {
    this.calculate();
  }
}
