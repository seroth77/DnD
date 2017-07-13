import { noView } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';

let httpClient = new HttpClient();

@noView()
export class MagicItemApi {
  getMagicItems() {
    httpClient.get('./src/json/Magic_Items.json')
      .then(data => {
        return JSON.parse(data.response);
      });
  }

  getMundaneItems() {
    httpClient.get('./src/json/Mundane_Items.json')
      .then(data => {
        return JSON.parse(data.response);
      });
  }

  getValuableItems() {
    httpClient.get('./src/json/Valuable_Items.json')
      .then(data => {
        return JSON.parse(data.response);
      });
  }

  getAllItems() {
    let sourceNames = [];
    let itemList = ['Magic_Items', 'Mundane_Items', 'Valuable_Items'];
    for (let x = 0; x < itemList.length; x++) {
      let source = httpClient.get('./src/json/' + itemList[x] + '.json');
      sourceNames.push(source);
    }

    return Promise.all(sourceNames).then(responses => {
      let obj = {};
      for (let y = 0; y < itemList.length; y++) {
        obj[itemList[y]] = JSON.parse(responses[y].response).compendium.item;
      }
      console.log(obj);
    });
  }
}
