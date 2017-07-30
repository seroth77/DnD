import { bindable } from 'aurelia-framework';

export class ClassMentalDisplay {
  @bindable mentalData;

  defensiveDataChanged() {
    console.log(this.mentalData);
  }
}