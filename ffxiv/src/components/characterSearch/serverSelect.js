import { bindable } from 'aurelia-framework';

export class ServerSelect {
  @bindable getServer;

  constructor() {
    this.items = [
      'Adamantoise',
      'Aegis',
      'Alexander',
      'Anima',
      'Asura',
      'Atomos',
      'Bahamut',
      'Balmung',
      'Behemoth',
      'Belias',
      'Brynhildr',
      'Cactuar',
      'Carbuncle',
      'Cerberus',
      'Chocobo',
      'Coeurl',
      'Diabolos',
      'Durandal',
      'Excalibur',
      'Exodus',
      'Faerie',
      'Famfrit',
      'Fenrir',
      'Garuda',
      'Gilgamesh',
      'Goblin',
      'Gungnir',
      'Hades',
      'Hyperion',
      'Ifrit',
      'Ixion',
      'Jenova',
      'Kujata',
      'Lamia',
      'Leviathan',
      'Lich',
      'Louisoix',
      'Malboro',
      'Mandragora',
      'Masamune',
      'Mateus',
      'Midgardsormr',
      'Moogle',
      'Odin',
      'Omega',
      'Pandaemonium',
      'Phoenix',
      'Ragnarok',
      'Ramuh',
      'Ridill',
      'Sargatanas',
      'Shinryu',
      'Shiva',
      'Siren',
      'Tiamat',
      'Titan',
      'Tonberry',
      'Typhon',
      'Ultima',
      'Ultros',
      'Unicorn',
      'Valefor',
      'Yojimbo',
      'Zalera',
      'Zeromus',
      'Zodiark'
    ];
  }

  onSelect(e) {
    let autocomplete = e.sender;
    let dataItem = autocomplete.dataItem(e.item.index());
    this.getServer({value: dataItem});
  }
}
