import { bindable } from 'aurelia-framework';

export class ClassOffensiveDisplay {
  @bindable offensiveData;

  offensiveDataChanged() {
    console.log(this.offensiveData);
  }
}
