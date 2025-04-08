import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {

  constructor() { }

  calculateCost(data: {
    days?: number | null;
    people?: number | null;
    mealsPerDay?: number | null;
    costPerMeal?: number | null;
  }): number {

    const days = data.days ?? 0;
    const people = data.people ?? 0;
    const mealsPerDay = data.mealsPerDay ?? 0;
    const costPerMeal = data.costPerMeal ?? 0;
   

    
    if (days > 0 && people > 0 && mealsPerDay > 0 && costPerMeal > 0) {
        return days * people * mealsPerDay * costPerMeal;
     }
     return 0; 
  }
}