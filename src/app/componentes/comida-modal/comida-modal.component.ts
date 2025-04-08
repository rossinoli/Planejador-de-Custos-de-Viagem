import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { IonicModule, ModalController } from '@ionic/angular';

import { ComidaService } from '../../serviço/comida.service';
import { CustoService } from '../../serviço/custo.service';
@Component({
  selector: 'app-comida-modal',
  templateUrl: './comida-modal.component.html',
  styleUrls: ['./comida-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ComidaModalComponent  implements OnInit {

 
  private modalCtrl = inject(ModalController);
  private foodService = inject(ComidaService);
  private costService = inject(CustoService);

 
  days: number | null = null;
  people: number | null = null; 
  mealsPerDay: number | null = null;
  costPerMeal: number | null = null; 

  calculatedCost: number = 0;

  constructor() { }

  ngOnInit() {}
  
  calculate() {
    this.calculatedCost = this.foodService.calculateCost({
      days: this.days,
      people: this.people,
      mealsPerDay: this.mealsPerDay,
      costPerMeal: this.costPerMeal
    });
  }


  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }


  saveAndClose() {
    this.calculate(); 
    this.costService.updateFoodCost(this.calculatedCost);
    this.modalCtrl.dismiss(null, 'confirm');
  }

  onInputChange() {
    this.calculate();
  }
}
