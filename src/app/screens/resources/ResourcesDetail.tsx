import { useContext, useEffect, useState } from 'react'
// import { useRouter } from 'next/router'
import * as dataRepositories from '../../../data/repositories'
import { useUpdateMutation, useDeleteMutation } from '../../services/api/apiRequest'

import FormGenerator, { FormLayoutProps } from '../../components/forms'
import { Box, Button } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { useDialog } from '../../hooks'
import { RequestDataType } from '../../../device/utils/axios'
import useQuery from '../../hooks/useQuery'
import { useNavigate, useParams } from 'react-router'

import language from '../../../data/i18n'
import { ResourceContext } from '../../contexts'
import { ResourcesProps } from './ResourcesIndex'
import { BreadcrumbLink } from '@/app/presenters/resources/Breadcrumbs'

const breadcrumbs: BreadcrumbLink[] = []

const ResourcesDetailScreen = ({storeCollection} : ResourcesProps) => {
  const navigate = useNavigate()
  const { ctx, setContext } = useContext(ResourceContext)
  let { collection, id, editable } = useParams()
  if(!!storeCollection) collection = storeCollection

  const url = `/${collection}/${id}`
  const [ forms, setForms ] = useState<FormLayoutProps>([])
  const [ data, setData ] = useState<Record<string, any>>({})
  const [ payload, setPayload ] = useState<RequestDataType>({ url, data: {}})
  const [ readOnly, setReadOnly ] = useState<boolean>(true)
  const [ pageTitle, setPageTitle ] = useState<string>('')
  // const response = useFetchQuery({ url })
  const [ updateData ] = useUpdateMutation()
  const [ deleteData ] = useDeleteMutation()
  const { openDialog, DialogScreen} = useDialog()

  const {
    fetchData,
    response
  } = useQuery({collection: `${collection}/${id}`, openDialog})

  useEffect(() => {
    if(!collection) return
    const { resources } = dataRepositories // as default
    const forms = (dataRepositories as any)[collection as string]?.forms || resources.forms
    const data = (dataRepositories as any)[collection as string]?.data || resources.data
    setForms(forms)
    setData(data)
    setPayload({ ...payload, url })
    if(editable) setReadOnly(false)
    setPageTitle(collection as string)

    fetchData()

    breadcrumbs.push({
      label: language[collection].plural,
      link: `/${collection}`
    })

  }, [collection, id])

  useEffect(() => {
    if(!response) return
    if(!collection) return

    setData(response?.data)
    const { data } = response
    const labelKey = (dataRepositories as any)[collection as string]?.labelKey

    const pageTitle: string = language[collection].singular
    breadcrumbs.push({
      label: data[labelKey],
      link: `/${collection}/${id}`
    })

    setContext({...ctx, breadcrumbs, pageTitle})
  }, [response, collection])

  const onToggleEdit = async () => {
    setReadOnly(!readOnly)
  }

  const onDelete = async () => {
    try {
      const isOkay = await openDialog({
        title: 'Delete',
        content: 'Are you sure want to delete?'
      })
      if(!isOkay) return

      const response = await deleteData(payload).unwrap()
      const { status, message } = response
      openDialog({
        title: status,
        content: message,
        onOk: () => {
          // router.push(`/${collection}`)
        }
      })
    } catch (error) {
      const { status, message } = (error as any).data
      openDialog({
        title: status,
        content: message
      })
    }
  }

  const onSubmit = async () => {
    try {
      const {id, ...payloadData} = data
      setPayload({
        ...payload,
        data: payloadData
      })
      const response = await updateData({
        url: payload.url,
        data: payloadData
      }).unwrap()
      const { status, message } = response
      openDialog({
        title: status,
        content: message,
        onOk: () => {
          onToggleEdit()
        }
      })
    } catch (error) {
      const { status, message } = (error as any).data
      openDialog({
        title: status,
        content: message
      })
    }
  }

  if(!data) return <>Loading...</>
  return (
    <>
      <FormGenerator
        forms={forms}
        data={data}
        onDataChanged={setData}
        readOnly={readOnly}
      />
      <AppBar position="fixed" color="inherit" sx={{ top: 'auto', bottom: 0, left: 240, width: 'calc(100vw - 240px)'}}>
        {(!readOnly)? (<Toolbar sx={{ display: 'flex', flexDirection: 'row'}}>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Button onClick={onToggleEdit}>Cancel</Button>
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button variant="text" color="error" onClick={onDelete} >Delete</Button>
            <Button variant="contained" disableElevation onClick={onSubmit}>Submit</Button>
          </Box>
        </Toolbar>): (<Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Button onClick={onToggleEdit}>Edit</Button>
        </Toolbar>)}
      </AppBar>
      <DialogScreen />
    </>
  )
}

export default ResourcesDetailScreen