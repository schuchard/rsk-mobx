import { extendObservable } from 'mobx';

class UIStore {
  constructor() {
    extendObservable(this, {
      panelOpen: true,
      get panelIsOpen() {
        return this.panelOpen ? 'Open' : 'Closed';
      },
    });
  }
}

const uiStore = new UIStore();

export default uiStore;
