import { ReactElement, useEffect, useState } from 'react'
// import { useRouter } from 'next/router'

import HomeIcon from '@mui/icons-material/Home'
import Link from '@mui/material/Link'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash'
import * as dataRepositories from '@data/repositories'
import { useFetchQuery, useDeleteMutation, usePostMutation } from '@app/services/api/apiRequest'

import Layout from '@app/layouts/layout'
// import { NextPageWithLayout } from '@app/utils/pageTypes'

import FormGenerator from '@component/forms'
import { FormLayoutProps } from '@component/forms'

import { Box, Breadcrumbs, Button, Stack, Typography } from '@mui/material'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useDialog } from '@app/hooks'
import { RequestDataType } from '@device/utils/axios'

const CollectionDetailPage = () => {
  // const router = useRouter()
  // const { collection, id } = router.query
  const collection = 'countries'
  const id = 1

  const url = `/${collection}/${id}/trashed`
  const [ forms, setForms ] = useState<FormLayoutProps>([])
  const [ data, setData ] = useState<Record<string, any>>({})
  const [ payload, setPayload ] = useState<RequestDataType>({ url, data: {}})
  const [ readOnly, setReadOnly ] = useState<boolean>(true)
  const [ ready, setReady ] = useState<boolean>(false)
  const response = useFetchQuery({ url })
  const [ deleteData ] = useDeleteMutation()
  const [ restoreData ] = usePostMutation()
  const { openDialog, DialogScreen} = useDialog()

  useEffect(() => {
    // if(!router.isReady) return
    const { resources } = dataRepositories // as default
    const forms = (dataRepositories as any)[collection as string]?.forms || resources.forms
    const data = (dataRepositories as any)[collection as string]?.data || resources.data
    setForms(forms)
    setData(data)
    setPayload({ ...payload, url: `/${collection}/${id}/trashed`})
    setReady(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // }, [ router.isReady ])

  useEffect(() => {
    if(!ready) return
    const { data, isError, error } = response
    if(isError) {
      const { status, message } = (error as any).data
      openDialog({
        title: status,
        content: message
      })
    }
    if(!data) return
    setData(data.data)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response])

  const onBack = () => {
    // router.push(`/${collection}/trash`)
  }

  const onRestore = async () => {
    try {
      const isOkay = await openDialog({
        title: 'Restore',
        content: 'Are you sure to restore?'
      })
      if(!isOkay) return

      const payload: RequestDataType = {
        url: `/${collection}/${id}/restore`,
        data: {}
      }

      const response = await restoreData(payload).unwrap()
      const { status, message } = response
      openDialog({
        title: status,
        content: message,
        onOk: () => {
          // router.push(`/${collection}/trash`)
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

  const onEmpty = async () => {
    try {
      const isOkay = await openDialog({
        title: 'Delete Forever',
        content: 'Are you sure to delete forever?'
      })
      if(!isOkay) return

      const payload: RequestDataType = {
        url: `/${collection}/${id}/delete`,
        data: {}
      }

      const response = await deleteData(payload).unwrap()
      const { status, message } = response
      openDialog({
        title: status,
        content: message,
        onOk: () => {
          // router.push(`/${collection}/trash`)
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
      {/* <Head>
        <title>New Data</title>
        <meta name="description" content="New Data" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Box sx={{ p: 2, mt: 8, display: 'flex', flexDirection: 'column', }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          spacing={2}
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              <HomeIcon />
            </Link>
            <Typography color="text.primary">Countries</Typography>
          </Breadcrumbs>
        </Stack>
      </Box>
      <FormGenerator
        forms={forms}
        data={data}
        onDataChanged={setData}
        readOnly={readOnly}
      />
      <AppBar position="fixed" color="inherit" sx={{ top: 'auto', bottom: 0, left: 280, width: 'calc(100vw - 280px)'}}>
        <Toolbar sx={{ display: 'flex', flexDirection: 'row'}}>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <Button onClick={onBack}>Back</Button>
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={onEmpty} variant="text" color="error" startIcon={<DeleteForeverIcon />}>Delete</Button>
            <Button onClick={onRestore} variant="contained" color="success" startIcon={<RestoreFromTrashIcon />}>Restore</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <DialogScreen />
    </>
  )
}

CollectionDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
export default CollectionDetailPage