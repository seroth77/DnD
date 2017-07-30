import { bindable } from 'aurelia-framework';

export class ClassResistanceDisplay {
  @bindable resistanceData;

  resistanceDataChanged() {
    console.log(this.resistanceData);
  }
}
