import { bindable } from 'aurelia-framework';

export class CharacterStats {
  @bindable specificCharacterGearsets;

  specificCharacterGearsetsChanged() {
    console.log(this.specificCharacterGearsets);
  }

  loadStats(item) {
    this.stats = item.stats.attributes;
    console.log(this.stats);
  }
}
