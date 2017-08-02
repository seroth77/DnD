import { inject } from 'aurelia-framework';
import { Api } from './api/api';
import { EventAggregator } from 'aurelia-event-aggregator';
import { CssAnimator } from 'aurelia-animator-css';
import $ from 'jquery';

//const menuOptions = [''];

@inject(Api, EventAggregator, CssAnimator)
export class App {
  constructor(api, eventAggregator, animator) {
    this.api = api;
    this.animator = animator;
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
      this.popupNotification.show('There is no data for this user. Please try again.', 'warning');
    });

    this.eventAggregator.subscribe('searchRepsonseError', response => {
      this.popupNotification.show(response.response, 'warning');
    });
  }

  getMatchingCharacters(obj) {
    this.characterGroup = [];
    let apiObj = {
      Name: obj.name.trim().replace(' ', '+'),
      Server: obj.server.trim()
    };
    this.api.getCharacter(apiObj)
      .then(response => {
        this.characterGroup = JSON.parse(response).data.results;
        let resultBlock = $('.search-results-slider');
        this.animator.animate(resultBlock, '');
      });
  }

  getSpecificUser(id) {
    this.api.getSpecificUser({ID: id})
      .then(response => {
        this.specificCharacter = response;
      });
  }

  getSpecificJob(id) {
    this.gearsetObj = this.search(id, 'classjob_id', this.specificCharacter.gearsets);
  }

  search(nameKey, prop, myArray) {
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i][prop] === nameKey) {
        return myArray[i];
      }
    }
  }

  showOption(option) {
    switch (option) {
    case 'jobs':
      $('.character-' + option + '-container' ).toggleClass('hidden');
      break;
    default:
      break;
    }
  }
}
