import { Component, inject } from '@angular/core';
import { IonicModule, ModalController, Platform } from '@ionic/angular';
import { CommonModule } from '@angular/common';


import { CustoService } from '../serviço/custo.service';

import { TransporteModalComponent } from '../componentes/transporte-modal/transporte-modal.component';
import { HospedagemModalComponent } from '../componentes/hospedagem-modal/hospedagem-modal.component';
import { ComidaModalComponent } from '../componentes/comida-modal/comida-modal.component';
import { ExtrasModalComponent } from '../componentes/extras-modal/extras-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule],
  standalone: true,
})
export class HomePage {

  public costService = inject(CustoService);
  private modalCtrl = inject(ModalController);
  public platform = inject(Platform);
  constructor() {}

  async openTransportModal() {
    const modal = await this.modalCtrl.create({
      component: TransporteModalComponent,

    });
    await modal.present();
  }

  async openAccommodationModal() {
    const modal = await this.modalCtrl.create({
      component: HospedagemModalComponent,
    });
    await modal.present();
  }

  async openFoodModal() {
    const modal = await this.modalCtrl.create({
      component: ComidaModalComponent,
    });
    await modal.present();
  }

  async openExtrasModal() {
    const modal = await this.modalCtrl.create({
      component: ExtrasModalComponent,
    });
    await modal.present();
  }

  
  formatCurrency(value: number | null): string {
    if (value === null) return 'R$ 0,00';
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  resetAll() {
    this.costService.resetCosts();
  }

}
