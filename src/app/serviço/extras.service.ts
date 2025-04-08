import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtrasService {

  constructor() { }

  calculateAttractionsCost(data: {
    attractionsCount?: number | null;
    attractionCost?: number | null;
  }): number {
    
    const attractionsCount = data.attractionsCount ?? 0;
    const attractionCost = data.attractionCost ?? 0;

    
    if (attractionsCount > 0 && attractionCost > 0) {
        return attractionsCount * attractionCost;
    }
    
    return 0;
  }
}