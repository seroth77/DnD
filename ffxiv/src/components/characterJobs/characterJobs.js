import { bindable } from 'aurelia-framework';

export class CharacterJobs {
  @bindable classJobs;
  @bindable selectedJobCallback;

  loadSpecificCharacterJob(obj) {
    this.selectedJobCallback({ID: obj});
  }
}
