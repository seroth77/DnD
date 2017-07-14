import { bindable } from 'aurelia-framework';

export class SearchList {
  @bindable selectedUserCallback;
  @bindable characterList;

  getSpecificUser(id) {
    this.selectedUserCallback({ID: id});
  }
}
