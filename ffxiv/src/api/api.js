import { noView } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';

let httpClient = new HttpClient();
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
    return httpClient.get(xivdbSpecificUri + params.ID)
      .then(data => {
        console.log(JSON.parse(data.response));
        return data.response;
      });
  }
}
