import { bindable } from 'aurelia-framework';

export class CharacterJobs {
  @bindable classJobs;

  loadSpecificCharacterJob(obj) {
    console.log(obj);
  }
}
