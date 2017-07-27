import { bindable } from 'aurelia-framework';
import $ from 'jquery';

export class CharacterData {
  @bindable specificCharacterData;

  constructor() {
    this.attributes = {};
  }

  showStat(key, val) {
    this.showHideStats(key);
    this.attributes = val;
  }

  showHideStats(stat) {
    let isHidden = $('.' + stat + '-stat-data').hasClass('hidden');
    $('.stat-block').addClass('hidden');
    if (isHidden) {
      $('.' + stat + '-stat-data').removeClass('hidden');
    }
  }
}
