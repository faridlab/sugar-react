import * as React from 'react'
import { FunctionComponent, useContext } from 'react'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Rating from '@mui/material/Rating'
import { FormProps, FormContext } from '../../forms'

const FormRating: FunctionComponent<FormProps> = (formProps: FormProps) => {
  const { data, setData } = useContext(FormContext)
  const { id, label, props } = formProps
  const properties = {
    fullWidth: true,
    type: 'text',
    ...props,
  }

  const handleChange = (_event: React.SyntheticEvent, value: number | null) => {
    setData({ ...data, [id]: value })
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <Rating
        {...properties}
        name={id}
        value={data[id]}
        onChange={handleChange}
      />
    </FormControl>
  )
}

export default FormRating