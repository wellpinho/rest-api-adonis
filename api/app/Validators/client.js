'use strict'

class client {
  get rules () {
    return {
      address: 'required',
      age: 'required',
      weight: 'required'
    }
  }

  get messages() {
    return {
      'address.required': 'Informe a propriedade address',
      'age.required': 'Informe a propriedade age',
      'weight.required': 'Informe a propriedade weight',
    }
  }
}

module.exports = client
