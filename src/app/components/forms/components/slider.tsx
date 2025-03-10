import * as React from 'react'
import { FunctionComponent, useContext } from 'react'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Slider from '@mui/material/Slider'
import { FormProps, FormContext } from '../../forms'

const FormSlider: FunctionComponent<FormProps> = (formProps: FormProps) => {
  const { data, setData } = useContext(FormContext)
  const { id, label, props } = formProps
  const properties = {
    fullWidth: true,
    type: 'text',
    ...props,
  }

  const handleChange = (_event: Event, value: number | number[]) => {
    setData({ ...data, [id]: value })
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <Slider
        {...properties}
        name={id}
        value={data[id]}
        onChange={handleChange}
      />
    </FormControl>
  )
}

export default FormSlider