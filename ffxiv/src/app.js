import { inject } from 'aurelia-framework';
import { Api } from './api/api';
import $ from 'jquery';

@inject(Api)
export class App {
  constructor(api) {
    this.api = api;
    this.characterGroup = [];
    this.searchName = '';
    this.stats = {};
    this.specificCharacter = {};
    this.message = 'Hello World!';
  }

  getMatchingCharacters() {
    if (this.searchName.trim() === '') {
      $('.character-search').addClass('has-error');
      $('#helpBlockSearch').removeClass('hidden');
      return;
    }

    $('.character-search').removeClass('has-error');
    $('#helpBlockSearch').addClass('hidden');

    this.characterGroup = [];
    this.api.getCharacter({Name: this.searchName.trim().replace(' ', '+')})
      .then(response => {
        this.characterGroup = JSON.parse(response).data.results;
      });
  }

  getSpecificUser(obj) {
    console.log('back at parent', obj);
    this.api.getSpecificUser({ID: obj.ID})
      .then(response => {
        this.specificCharacter = response;
        console.log(response);
      });
  }

  loadStats(item) {
    this.stats = item.stats.attributes;
    console.log(this.stats);
  }
}
