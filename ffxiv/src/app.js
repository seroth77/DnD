import { inject } from 'aurelia-framework';
import { Api } from './api/api';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(Api, EventAggregator)
export class App {
  constructor(api, eventAggregator) {
    this.api = api;
    this.characterGroup = [];
    this.searchName = '';
    this.stats = {};
    this.specificCharacter = {};
    this.eventAggregator = eventAggregator;
    this.message = 'Hello World!';
  }

  attached() {
    this.eventAggregator.subscribe('apiRepsonseError', response => {
      console.log(response);
    });
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
