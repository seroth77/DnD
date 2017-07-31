import { bindable } from 'aurelia-framework';

export class CoreAttributes {
  @bindable gearsetData;

  constructor() {
    this.gearsetObj = {};
  }

  gearsetDataChanged() {
    this.gearsetObj = this.gearsetData;
  }
}
