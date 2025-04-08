import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospedagemService {

  constructor() { }

  calculateCost(data: {
    nights?: number | null;
    people?: number | null;
    costPerNightPerPerson?: number | null;
  }): number {
  
    const nights = data.nights ?? 0;
    const people = data.people ?? 0;
    const costPerNightPerPerson = data.costPerNightPerPerson ?? 0;
  

   
    if (nights > 0 && people > 0 && costPerNightPerPerson > 0) {
      return nights * people * costPerNightPerPerson;
    }
    return 0; 
  }
}