import { inject } from 'aurelia-framework';
import { Api } from './api/api';

@inject(Api)
export class App {
  constructor(api) {
    this.api = api;
    this.characterGroup = [];
    this.searchName = '';
    this.message = 'Hello World!';
  }

  activate() {
  }

  getMatchingCharacters() {
    if (this.searchName.trim() === '') {
      return;
    }

    this.characterGroup = [];
    this.api.getCharacter({Name: this.searchName.trim().replace(' ', '+')})
      .then(response => {
        this.characterGroup = JSON.parse(response).data.results;
        console.log(response);
      });
  }

  getSpecificUser(id) {
    this.api.getSpecificUser({ID: id})
      .then(response => {
        console.log(response);
      });
  }
}
