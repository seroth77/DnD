import { bindable } from 'aurelia-framework';
import $ from 'jquery';

export class CharacterSearch {
  @bindable getMatchingCharacters;

  searchForUser() {
    if (this.searchName === undefined) {
      this.searchError(true);
      return;
    }

    if (this.searchName.trim() === '') {
      this.searchError(true);
      this.searchName = '';
      return;
    }

    this.searchError(false);
    this.getMatchingCharacters({value: this.searchName});
  }

  searchError(isError) {
    if (isError) {
      $('.character-search').addClass('has-error');
      $('#helpBlockSearch').removeClass('hidden');
    } else {
      $('.character-search').removeClass('has-error');
      $('#helpBlockSearch').addClass('hidden');
    }
  }
}
