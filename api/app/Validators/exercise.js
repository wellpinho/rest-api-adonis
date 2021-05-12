'use strict'

class exercise {
  get rules () {
    return {
      name: 'required',
      observation: 'required',
      series: 'required',
      waiting_time: 'required'
    }
  }

  get messages () {
    return {
      'name.required': 'The value NAME is required',
      'observation.required': 'The value OBSERVATION is required',
      'series.required': 'The value SERIES is required',
      'waiting_time.required': 'The value WITING_TIME is required',
    }
  }
}

module.exports = exercise
