import {
  validation
} from '../../../domain/repositories/resources'

import columns from './columns'
import forms from './forms'
import data, { labelKey } from './data'

const params = {
  relationship: ['country', 'province'],
}

export {
  data,
  labelKey,
  columns,
  forms,
  validation,
  params
}