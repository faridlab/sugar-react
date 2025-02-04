import { createContext } from "react"

const FormContext = createContext<Record<string, any>>({})
const ResourceContext = createContext<Record<string, any>>({})

export default FormContext
export {
    ResourceContext
}