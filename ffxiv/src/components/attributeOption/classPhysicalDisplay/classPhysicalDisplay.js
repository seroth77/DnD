import { bindable } from 'aurelia-framework';

export class ClassPhysicalDisplay {
  @bindable physicalData;

  defensiveDataChanged() {
    console.log(this.physicalData);
  }
}