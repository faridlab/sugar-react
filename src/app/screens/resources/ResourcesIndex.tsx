import { useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from "react-router"
import gridActions from '../../../data/repositories/datagrid/actions'

import {
  GridColDef,
} from '@mui/x-data-grid'

import * as dataRepositories from '../../../data/repositories'
import { DatagridPresenter } from '../../presenters/data'
import { useDialog } from '../../hooks'
import useFilterParams from '../../hooks/useFilterParams'
import useQuery from '../../hooks/useQuery'
import useDestruction from '../../hooks/useDestruction'

import language from '../../../data/i18n'
import { ResourceContext } from '../../contexts'
import { BreadcrumbLink } from '../../presenters/dashboard/PageContainer'

const breadcrumbs: BreadcrumbLink[] = []

const ResourcesIndexScreen = () => {
  const navigate = useNavigate()
  const { ctx, setContext } = useContext(ResourceContext)
  const { collection, delete_id } = useParams()
  const [ columns, setColumns ] = useState<GridColDef[]>([])
  // NOTE: i don't like this approach use ready state, please find ahother cool way
  const [ ready, setReady ] = useState<boolean>(false)
  const { openDialog, DialogScreen} = useDialog()

  const {
    parameters,
    setParameters
  } = useFilterParams()

  const {
    fetchData,
    loading,
    response
  } = useQuery({collection, openDialog})

  const callbackOnDeleted = () => fetchData(parameters)
  const {
    deleteData
  } = useDestruction({collection, openDialog, callbackOnDeleted})

  useEffect(() => {
    if(!collection) return
    const { resources } = dataRepositories // as default
    const columns = (dataRepositories as any)[collection as string]?.columns || []
    const params = (dataRepositories as any)[collection as string]?.params || resources.params
    // setParams({...params, ...parameters})
    columns.push(gridActions)

    setParameters({...parameters, ...params})
    setColumns(columns)
    setReady(true)

    const pageTitle: string = language[collection].plural
    breadcrumbs.push({
      label: language[collection].plural,
      link: `/${collection}`
    })
    setContext({...ctx, breadcrumbs, pageTitle})
  }, [collection])

  useEffect(() => {
    if(!delete_id) return
    deleteData(delete_id as unknown as string)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delete_id])

  const rows = useMemo(() => response?.data || [], [response])
  const rowCount = useMemo(() => response?.meta?.recordsFiltered || 0, [response])

  useEffect(() => {
    if(!ready) return
    fetchData(parameters)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, collection, parameters])

  return (
    <>
      <DatagridPresenter
        onPaginationChanged={() => {}} // TODO: add this
        columns={columns}
        rows={rows}
        rowCount={rowCount}
        params={parameters}
        setParams={setParameters}
        isLoading={loading}
      />
      <DialogScreen />
    </>
  )
}

export default ResourcesIndexScreen