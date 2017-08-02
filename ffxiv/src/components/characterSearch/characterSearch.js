import { inject, bindable } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class CharacterSearch {
  @bindable getMatchingCharacters;

  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
    this.server = '';
  }

  getServer(serverName) {
    this.server = serverName;
  }

  searchForUser() {
    if (this.searchName === undefined || this.searchName.trim() === '') {
      this.errorHandler('Please enter a name to search.');
      this.searchName = '';
      return;
    }

    if (this.server.trim() === '') {
      this.errorHandler('Please select a server.');
      return;
    }

    //this.searchError(false);
    let obj = {
      name: this.searchName,
      server: this.server
    };
    this.getMatchingCharacters({obj});
  }

  errorHandler(msg) {
    this.eventAggregator.publish('searchRepsonseError', { response: msg });
  }
}
