import { FunctionComponent } from "react"
import FormGenerator from './formGenerator'
import TextField from './components/textField'
import Checkbox from './components/checkbox'
import Radio from './components/radio'
import Rating from './components/rating'
import Switch from './components/switch'
import Slider from './components/slider'
import Select from './components/select'
import FormContext from './contexts'

export interface FormPropsComponent {
  create?: FunctionComponent;
  show?: FunctionComponent;
  edit?: FunctionComponent;
}

export interface FormProps {
  id: string;
  col?: number;
  required?: boolean;
  label?: string;
  type: string;
  component?: FunctionComponent<FormProps> | FormPropsComponent // FIXME: this type arise error on react run time, should i remove this type?
  props: Record<string, any>, // used for dynamic props component
  reference?: Record<string, any>,
}

export type FormLayoutProps = Array<FormProps[]>

export default FormGenerator
export {
  FormContext,

  TextField,
  Checkbox,
  Radio,
  Rating,
  Switch,
  Slider,
  Select
}
