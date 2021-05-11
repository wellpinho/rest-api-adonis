'use strict'

const User = use('App/Models/User')

class UserController {
  async index() {
    return await User.all()
  }

  async show({ params }) {
    const user = await User.findOrFail(params.id)

    return user
  }

  async store({ request }) {
    const userData = request.only([
      'name',
      'username',
      'email',
      'password',
      'type_user_id'
    ])

    const user = await User.create(userData)

    return user
  }

  async update({ params, request }) {
    const user = await User.findOrFail(params.id)
    const userData = request.only([
      'name',
      'username',
      'email',
      'password',
      'type_user_id'
    ])

    user.merge(userData)

    await user.save()

    return user
  }

  async destroy({ params }) {
    const user = await User.findOrFail(params.id)

    return await user.delete()
  }
}

module.exports = UserController
