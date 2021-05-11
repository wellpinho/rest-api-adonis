'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world' }
})

Route.resource('users', 'UserController').apiOnly().validator(new Map([
  [['users.store'], ['User']], [['users.update'], ['User']]
]))

Route.resource('clients', 'ClientController').apiOnly().validator(new Map([
  [['clients.store'], ['Client']], [['clients.update'], ['Client']]
]))
Route.resource('exercises', 'ExerciseController').apiOnly()
Route.resource('trainings', 'TrainingController').apiOnly()
Route.resource('products', 'ProductController').apiOnly()
