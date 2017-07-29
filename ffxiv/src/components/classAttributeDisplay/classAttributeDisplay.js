import { bindable } from 'aurelia-framework';

export class ClassAttributeDisplay {
  @bindable attributeData;

  constructor() {
    this.sortedAttributes = [];
  }

  attributeDataChanged() {
    if (this.attributeData !== undefined) {
      let attributes = this.attributeData.attributes;
      let sortedKeys = Object.keys(attributes).sort((b, a) => attributes[a] - attributes[b]);
      for (let x = 0; x < sortedKeys.length; x++) {
        let tmp = sortedKeys[x];
        this.sortedAttributes.push({
          key: tmp,
          value: attributes[tmp],
          color: (x <= 2) ? true : false
        });
        console.log(this.sortedAttributes);
      }
    }
  }
}
