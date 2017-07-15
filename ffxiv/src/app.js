import { inject } from 'aurelia-framework';
import { Api } from './api/api';

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

  getMatchingCharacters(value) {
    this.characterGroup = [];
    this.api.getCharacter({Name: value.trim().replace(' ', '+')})
      .then(response => {
        console.log(response);
        this.characterGroup = JSON.parse(response).data.results;
      });
  }

  getSpecificUser(id) {
    this.api.getSpecificUser({ID: id})
      .then(response => {
        this.specificCharacter = response;
        console.log(response);
      });
  }
}
