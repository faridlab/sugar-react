import { FunctionComponent, useEffect, useState } from 'react'
// import { useRouter } from 'next/router'
// import Head from 'next/head'
import DashboardLayout from '@app/layouts/dashboard'
// import { NextPageWithLayout } from '@app/utils/pageTypes'

import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'

import {
  GridColDef,
} from '@mui/x-data-grid'

import { useDeleteMutation } from '@app/services/api/apiRequest'
import * as dataRepositories from '@data/repositories'
import { useQueryMutation } from '@app/services/api/apiRequest'
import { DatagridPresenter } from '@/app/presenters/data'
import { useDialog } from '@app/hooks'
import { RequestDataType } from '@device/utils/axios'
import useFilterParams from '@app/hooks/useFilterParams'
import useActionsPresenter from '@app/hooks/countries/useActionsPresenter'
import { Box, Stack, Button, IconButton } from '@mui/material'

const CollectionPage = () => {
  // const router = useRouter()
  const collection = 'countries'
  // const { delete_id } = router.query
  const delete_id = 1
  const url = `/${collection}`
  const [ columns, setColumns ] = useState<GridColDef[]>([])
  // const [ rows, setRows ] = useState<GridRowsProp[]>([])
  const [ rows, setRows ] = useState<any[]>([])
  const [ loading, setLoading ] = useState<boolean>(false)

  const {
    actions,
    presenterProps
  } = useActionsPresenter({rows, setRows})

  // NOTE: i don't like this approach use ready state, please find ahother cool way
  const [ ready, setReady ] = useState<boolean>(false)
  const [ rowCount, setRowCount ] = useState(0)
  const [ pageTitle, setPageTitle ] = useState<string>('')
  const [ deleteData ] = useDeleteMutation()
  const { openDialog, DialogScreen} = useDialog()

  const filterParams = useFilterParams()
  const {
    parameters,
    setParameters
  } = filterParams

  const [ fetchQuery ] = useQueryMutation()
  const onFetchData = async (url: string, params: Record<string, any> = {}) => {
    try {
      if(loading) return
      setLoading(true)
      const payload = {
        url,
        params
      }
      const response = await fetchQuery(payload).unwrap()
      const { data, meta } = response
      setRows(data)
      setRowCount(meta.recordsFiltered)
      setLoading(false)
    } catch (error) {}
  }

  useEffect(() => {
    const { resources } = dataRepositories // as default
    const columns = (dataRepositories as any)[collection as string]?.columns || []
    const params = (dataRepositories as any)[collection as string]?.params || resources.params
    columns.push(actions)

    setParameters({...parameters, ...params})
    setColumns(columns)
    setRows([])
    setReady(true)
    setPageTitle(collection as string)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(!delete_id) return
    onDelete(delete_id as unknown as string)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delete_id])

  useEffect(() => {
    if(!ready) return
    onFetchData(`/${collection}`, parameters)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, parameters])

  const onDelete = async (id: string) => {
    try {
      const isOkay = await openDialog({
        title: 'Delete',
        content: 'Are you sure want to delete?'
      })
      if(!isOkay) {
        // router.push(`/${collection}`)
        return
      }

      const payload: RequestDataType = {
        url: `/${collection}/${id}`,
        data: {}
      }

      const response = await deleteData(payload).unwrap()
      const { status, message } = response
      openDialog({
        title: status,
        content: message,
        onOk: () => {
          // router.push(`/${collection}`)
          onFetchData(url, parameters)
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

  const ToolbarActions: FunctionComponent = () => {
    return <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      p={2}
    >
      <Box></Box>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
        spacing={1}
      >
        <Button
          startIcon={<AddIcon />}
          color="success"
          // onClick={() => router.push(`/${collection}/create`)}
        >
          New
        </Button>
        <IconButton
          aria-label="trash"
          color="error"
          // onClick={() => router.push(`/${collection}/trash`)}
        >
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Box>
  }

  return (
    <>
      {/* <Head>
        <title>{`${collection||''}`}</title>
        <meta name="description" content="{`${collection||''}`}" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <DashboardLayout
        filterParams={filterParams}
        title={pageTitle}
        ToolbarActions={ToolbarActions}
      >
        <DatagridPresenter
          onPaginationChanged={() => {}} // TODO: add this
          columns={columns}
          rows={rows}
          rowCount={rowCount}
          params={parameters}
          setParams={setParameters}
          isLoading={loading}
          props={presenterProps}
        />
      </DashboardLayout>
      <DialogScreen />
    </>
  )
}

export default CollectionPage