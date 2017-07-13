import { inject } from 'aurelia-framework';
import { MagicItemApi } from './api/magic-item-api';

@inject(MagicItemApi)
export class App {
  constructor(magicItemApi) {
    this.message = 'Hello World!';
    this.magicItemApi = magicItemApi;
  }

  async activate() {
    await this.magicItemApi.getAllItems();
  }
}
