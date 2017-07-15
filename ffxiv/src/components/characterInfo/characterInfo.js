import { bindable } from 'aurelia-framework';

export class CharacterInfo {
  @bindable specificCharacterInfo;

  specificCharacterInfoChanged() {
    console.log(this.specificCharacterInfo);
  }
}
