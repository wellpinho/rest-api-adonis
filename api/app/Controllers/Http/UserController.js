'use strict'

class UserController {
  async index() {
    return { result: 'Pega todos os usuários do banco' }
  }

  async show() {
    return { result: `Buscou o usuário pelo id` }
  }

  async store() {
    return { result: 'Criando novo usuário ' }
  }

  async update() {
    return { result: 'Atualizando o usuário pelo id ' }
  }

  async destroy() {
    return { result: 'Deletando user pelo id' }
  }
}

module.exports = UserController
