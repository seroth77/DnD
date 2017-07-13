import { noView } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';

let httpClient = new HttpClient();
const xivdbNameUri = 'https://xivsync.com/character/search?server=Coeurl&name=';

@noView()
export class Api {
  getCharacter(params) {
    httpClient.get(xivdbNameUri + params.Name)
      .then(data => {
        console.log(JSON.parse(data.response));
        return JSON.parse(data.response);
      });
  }
}
