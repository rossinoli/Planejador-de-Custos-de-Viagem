import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { IonicModule, ModalController } from '@ionic/angular';


import { TransporteService } from '../../serviço/transporte.service';
import { CustoService } from '../../serviço/custo.service';
@Component({
  selector: 'app-transporte-modal',
  templateUrl: './transporte-modal.component.html',
  styleUrls: ['./transporte-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TransporteModalComponent  implements OnInit {

  private modalCtrl = inject(ModalController);
  private transportationService = inject(TransporteService);
  private costService = inject(CustoService);

  distance: number | null = null;
  transportType: 'Carro' | 'Ônibus' | 'Avião' | null = null;
  consumption: number | null = null; 
  fuelPrice: number | null = null; 
  ticketPrice: number | null = null; 

  calculatedCost: number = 0;

  constructor() { }

  ngOnInit() {}

  calculate() {
    
    this.calculatedCost = this.transportationService.calculateCost({
      distance: this.distance,
      consumption: this.consumption,
      fuelPrice: this.fuelPrice,
      ticketPrice: this.ticketPrice,
      transportType: this.transportType
    });
  }

 
  saveAndClose() {
    this.calculate(); 
    this.costService.updateTransportCost(this.calculatedCost); 
    this.modalCtrl.dismiss(null, 'confirm'); 
  }

  
  cancel() {
    this.modalCtrl.dismiss(null, 'cancel'); 
  }

 
  onInputChange() {
    
    if (this.transportType) { 
        this.calculate();
    } else {
        this.calculatedCost = 0; 
    }
  }

}
