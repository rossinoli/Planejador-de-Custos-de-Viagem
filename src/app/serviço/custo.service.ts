import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

export interface CostState {
  transport: number;
  accommodation: number;
  food: number;
  attractions: number;
  extraValue: number; 
  extraType: 'fixed' | 'percentage' | null;
}

@Injectable({
  providedIn: 'root'
})
export class CustoService {

  private initialState: CostState = {
    transport: 0,
    accommodation: 0,
    food: 0,
    attractions: 0,
    extraValue: 0,
    extraType: null,
  };

  private costState = new BehaviorSubject<CostState>(this.initialState);

  
  transportCost$ = this.costState.pipe(map((state) => state.transport));
  accommodationCost$ = this.costState.pipe(map((state) => state.accommodation));
  foodCost$ = this.costState.pipe(map((state) => state.food));
  attractionsCost$ = this.costState.pipe(map((state) => state.attractions));
  extrasDetails$ = this.costState.pipe(map(state => ({ value: state.extraValue, type: state.extraType })));

  
  subtotalBeforeExtras$: Observable<number> = combineLatest([
    this.transportCost$,
    this.accommodationCost$,
    this.foodCost$,
    this.attractionsCost$,
  ]).pipe(
    map(([transport, accommodation, food, attractions]) =>
      transport + accommodation + food + attractions
    )
  );

  
  calculatedExtrasCost$: Observable<number> = combineLatest([
      this.subtotalBeforeExtras$,
      this.extrasDetails$
  ]).pipe(
    map(([subtotal, extras]) => {
        if(extras.type === 'fixed') {
            return extras.value;
        } else if (extras.type === 'percentage' && subtotal > 0) {
            return subtotal * (extras.value / 100);
        }
        return 0;
    })
  );

  
  finalTotalCost$: Observable<number> = combineLatest([
    this.subtotalBeforeExtras$,
    this.calculatedExtrasCost$
  ]).pipe(
    map(([subtotal, extrasCost]) => subtotal + extrasCost)
  );



  constructor() { }

  updateTransportCost(cost: number) {
    this.costState.next({ ...this.costState.value, transport: cost });
  }

  updateAccommodationCost(cost: number) {
    this.costState.next({ ...this.costState.value, accommodation: cost });
  }

  updateFoodCost(cost: number) {
    this.costState.next({ ...this.costState.value, food: cost });
  }

  updateAttractionsCost(cost: number) {
    this.costState.next({ ...this.costState.value, attractions: cost });
  }

  updateExtras(type: 'fixed' | 'percentage' | null, value: number) {
    this.costState.next({ ...this.costState.value, extraType: type, extraValue: value });
  }

  resetCosts() {
    this.costState.next(this.initialState);
  }

}
