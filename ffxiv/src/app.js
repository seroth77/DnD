import { inject } from 'aurelia-framework';
import { Api } from './api/api';

@inject(Api)
export class App {
  constructor(api) {
    this.api = api;
    this.message = 'Hello World!';
  }

  async activate(params, routeConfig, navigationInstruction) {
    await this.api.getCharacter({Name: 'Lirin'});
  }
}
