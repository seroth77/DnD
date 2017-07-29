import { bindable } from 'aurelia-framework';

export class ClassHealthDisplay {
  @bindable healthData;

  healthDataChanged() {
    console.log(this.healthData);
  }
}
