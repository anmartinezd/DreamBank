import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { GlobalState } from '../models/globalState';

@Injectable({
  providedIn: 'root'
})
export class StorageService extends ObservableStore<GlobalState> {

  constructor() {
    super({trackStateHistory:true});
  }

  changeCurrentState(state) {
    return this.setState(state);
  }

  getCurrentState() {
    return this.getState();
  }

  getCurrentStateProperty(property) {
    return this.getStateProperty(property);
  }
}