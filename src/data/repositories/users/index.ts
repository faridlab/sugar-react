import {
  validation
} from '../../../domain/repositories/resources'

import columns from './columns'
import forms from './forms'
import data from './data'

const params = {
  relationship: ['roles.role'],
}

export {
  data,
  columns,
  forms,
  validation,
  params
}