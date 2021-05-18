import { Injectable } from '@angular/core';

import { ObservableStore } from '@codewithdan/observable-store';

import { GlobalStateInterface } from '../../interfaces/globalState.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService extends ObservableStore<GlobalStateInterface> {

  constructor() {
    super({trackStateHistory:true});
  }

  changeCurrentState(state) {
    return this.setState(state);
  }

  getCurrentState() {
    return this.getState();
  }

  getCurrentStateProperty<T>(property): T {
    return this.getStateProperty<T>(property);
  }
}