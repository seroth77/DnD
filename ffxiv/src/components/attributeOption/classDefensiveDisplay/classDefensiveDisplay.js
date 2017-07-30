import { bindable } from 'aurelia-framework';

export class ClassDefensiveDisplay {
  @bindable defensiveData;

  defensiveDataChanged() {
    console.log(this.defensiveData);
  }
}