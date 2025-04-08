import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { IonicModule, ModalController } from '@ionic/angular';
import { take } from 'rxjs/operators';

import { ExtrasService } from '../../serviço/extras.service';
import { CustoService } from '../../serviço/custo.service';
@Component({
  selector: 'app-extras-modal',
  templateUrl: './extras-modal.component.html',
  styleUrls: ['./extras-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ExtrasModalComponent  implements OnInit {

    // Injeção de dependências
    private modalCtrl = inject(ModalController);
    private extrasService = inject(ExtrasService);
    public costService = inject(CustoService); 

  attractionsCount: number | null = null;
  attractionCost: number | null = null; // R$/atração


  extraType: 'fixed' | 'percentage' | null = null;
  extraValue: number | null = null; // Valor (R$ ou %)

 
  calculatedAttractionsCost: number = 0;

  constructor() { }

  ngOnInit() {

    this.costService.attractionsCost$.pipe(take(1)).subscribe(cost => {
       this.calculatedAttractionsCost = cost;
       
  });

  this.costService.extrasDetails$.pipe(take(1)).subscribe(details => {
    this.extraType = details.type;
    this.extraValue = details.value;
  });
  }

  calculateAttractions() {
    this.calculatedAttractionsCost = this.extrasService.calculateAttractionsCost({
      attractionsCount: this.attractionsCount,
      attractionCost: this.attractionCost
    });
  }


  onAttractionInputChange() {
    this.calculateAttractions();
  }


  onExtraTypeChange() {
  
    this.extraValue = null;
  }


  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }


  saveAndClose() {

    this.calculateAttractions();


    this.costService.updateAttractionsCost(this.calculatedAttractionsCost);
    this.costService.updateExtras(this.extraType, this.extraValue ?? 0); 

    this.modalCtrl.dismiss(null, 'confirm');
  }
}
