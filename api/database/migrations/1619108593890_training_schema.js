'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TrainingSchema extends Schema {
  up() {
    this.create('trainings', (table) => {
      table.increments()
      table.integer('client_id').unsigned().references('id').inTable('clients').notNullable()
      table.stribng('name', 50).notNullable()
      table.stribng('observation', 200)
      table.timestamps()
    })
  }

  down() {
    this.drop('trainings')
  }
}

module.exports = TrainingSchema
