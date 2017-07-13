import { noView } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';

let httpClient = new HttpClient();
let characterInfoArray = ['', 'gearsets', 'achievements', 'events', 'tracking', 'achievements_possible', 'achievements_obtained'];
const xivdbNameSearchUri = 'https://xivsync.com/character/search?server=Coeurl&name=';
const xivdbSpecificUri = 'https://api.xivdb.com/character/';

@noView()
export class Api {
  constructor() {
    this.searchName = '';
  }

  getCharacter(params) {
    return httpClient.get(xivdbNameSearchUri + params.Name)
      .then(data => {
        console.log(JSON.parse(data.response).data.results);
        return data.response;
      });
  }

  getSpecificUser(params) {
    let sourceNames = [];
    for (let x = 0; x < characterInfoArray.length; x++) {
      let source = httpClient.get(xivdbSpecificUri + params.ID + (characterInfoArray[x] !== '' ? '?data=' + characterInfoArray[x] : '' ));
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
