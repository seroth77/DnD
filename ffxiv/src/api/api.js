import { inject, noView } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';
import { EventAggregator } from 'aurelia-event-aggregator';

//let httpClient = new HttpClient();
let characterInfoArray = ['', 'gearsets', 'achievements', 'events', 'tracking', 'achievements_possible', 'achievements_obtained'];
const xivdbNameSearchUri = 'https://xivsync.com/character/search?server=Coeurl&name=';
const xivdbSpecificUri = 'https://api.xivdb.com/character/';

@noView()
@inject(HttpClient, EventAggregator)
export class Api {
  constructor(httpClient, eventAggregator) {
    let _self = this;
    this.eventAggregator = eventAggregator;

    httpClient.configure(config => {
      config.withInterceptor({
        request(request) {
          console.log(`Intercepted request using method: ${request.method} with URL: ${request.url}`);
          return request;
        },
        requestError(error) {
          console.log(error);
          throw error;
        },
        response(response) {
          console.log(response);
          console.log(`Intercepted response ${response.statusCode} as ${response.statusText}`);
          return response;
        },
        responseError(error) {
          console.log(error);
          _self.errorHandler(error);
          //throw error;
        }
      });
      config.withHeader('accept', 'application/json');
    });

    this.searchName = '';
    this.httpClient = httpClient;
  }

  errorHandler(error) {
    console.log('errorHandler Function called.');
    this.eventAggregator.publish('apiRepsonseError', { response: JSON.parse(error.response) });
  }

  getCharacter(params) {
    return this.httpClient.get(xivdbNameSearchUri + params.Name)
      .then(data => {
        console.log(JSON.parse(data.response).data.results);
        return data.response;
      });
  }

  getSpecificUser(params) {
    let sourceNames = [];
    for (let x = 0; x < characterInfoArray.length; x++) {
      let source = this.httpClient.get(xivdbSpecificUri + params.ID + (characterInfoArray[x] !== '' ? '?data=' + characterInfoArray[x] : '' ));
      sourceNames.push(source);
    }

    return Promise.all(sourceNames)
      .then(responses => {
        let obj = {};
        for (let y = 0; y < characterInfoArray.length; y++) {
          if (characterInfoArray[y] === '') {
            obj['info'] = JSON.parse(responses[y].response);
          } else {
            obj[characterInfoArray[y]] = JSON.parse(responses[y].response);
          }
        }
        console.log(obj);
        return obj;
      });
  }
}
