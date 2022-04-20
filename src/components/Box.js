import { Lightning } from '@lightningjs/sdk'

export default class Box extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      color: 0xffff3a33,
      w: 100,
      h: 100,
      flexItem: {
        margin: 10,
      },
    }
  }
}
