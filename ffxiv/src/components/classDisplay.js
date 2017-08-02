import { bindable } from 'aurelia-framework';

export class ClassDisplay {
  @bindable classData;

  constructor() {
    this.jobItems = [];
  }

  classDataChanged() {
    this.jobItems = [];
    this.jobItems = $.map(this.classData, (value, index) => { return [value]; });
    console.log(this.jobItems);
  }
}
