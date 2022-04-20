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
      Label: {
        mountY: 0.5,
        mountX: 0.5,
        x: 50,
        y: 50,
        text: {
          text: this.bindProp('boxText'),
        },
      },
    }
  }

  _construct() {
    console.log('Box construct')
  }

  _build() {
    console.log('Box build')
  }

  _setup() {
    console.log('Box setup')
  }

  _init() {
    console.log('Box init')
  }

  _enable() {
    console.log('Box enable')
  }
}
