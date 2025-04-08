import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransporteService {

  constructor() { }

  calculateCost(data: {
    distance?: number | null;
    consumption?: number | null;
    fuelPrice?: number | null;
    ticketPrice?: number | null;
    transportType: 'Carro' | 'Ônibus' | 'Avião' | null;
  }): number {
    if (!data.transportType) return 0;

    switch (data.transportType) {
      case 'Carro':
        
        const distance = data.distance ?? 0;
        const consumption = data.consumption ?? 1; 
        const fuelPrice = data.fuelPrice ?? 0;

       
        if (distance > 0 && consumption > 0 && fuelPrice > 0) {
          return (distance / consumption) * fuelPrice;
        }
        return 0;
      

      case 'Ônibus':
      case 'Avião':
        
        const ticketPrice = data.ticketPrice ?? 0;
        return ticketPrice;

      default:
        return 0;
    }
  }

}
