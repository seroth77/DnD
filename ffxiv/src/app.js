import { inject } from 'aurelia-framework';
import { Api } from './api/api';
import { EventAggregator } from 'aurelia-event-aggregator';
import $ from 'jquery';

//const menuOptions = [''];

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
    this.gearsetObj = {};

    this.scale = {
      majorUnit: 20,
      minorUnit: 0,
      min: 0,
      max: 100,
      vertical: false,
      ranges: [
        {
          from: 0,
          to: 100,
          color: '#2798df'
        }
      ]
    };
  }

  attached() {
    this.eventAggregator.subscribe('apiRepsonseError', response => {
      console.log(response);
      this.popupNotification.show('There is no data for this user. Please try again.', 'warning');
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

  getSpecificJob(id) {
    this.gearsetObj = this.search(id, 'classjob_id', this.specificCharacter.gearsets);
    console.log(this.gearsetObj);
  }

  search(nameKey, prop, myArray) {
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i][prop] === nameKey) {
        return myArray[i];
      }
    }
  }

  showOption(option) {
    console.log(option);
    switch (option) {
      case 'jobs':
        $('.character-' + option + '-container' ).toggleClass('hidden');
        break;
      default:
        break;
    }
  }
}
