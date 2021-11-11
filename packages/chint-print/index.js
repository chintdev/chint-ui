import chintPrint from './src/main'

/* istanbul ignore next */
chintPrint.install = function (Vue) {
  Vue.component(chintPrint.name, chintPrint)
}

export default chintPrint
