'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExerciceTrainingSchema extends Schema {
  up() {
    this.create('exercice_training', (table) => {
      table.increments()
      table.integer('execise_id').unsigned().references('id').inTable('exercises').notNullable()
      table.integer('training_id').unsigned().references('id').inTable('trainings').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('exercice_training')
  }
}

module.exports = ExerciceTrainingSchema
