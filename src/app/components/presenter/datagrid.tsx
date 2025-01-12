import { FunctionComponent, useState } from 'react'
import {
  DataGrid,
  GridColDef,
  GridEventListener
} from '@mui/x-data-grid'

export type Params = {
  page: number;
  limit: number;
  [key: string]: Object | number | string | Record<string, any> | Record<string, any>[] | Function;
}

type PropsType = {
  params: Params;
  setParams: Function;
  rowCount: number;
  // rows: Record<string, any>[] | Record<string, any>;
  rows: any[];
  columns: GridColDef[];
  isLoading: boolean;
  onPaginationChanged: (params: any) => void;
  onCellClick?: GridEventListener<'cellClick'>;
  props?: Record<string, any>;
}

const DatagridPresenter: FunctionComponent<PropsType> = (props: PropsType) => {
  const {
    params,
    setParams,
    isLoading,
    rows,
    columns,
    rowCount
  } = props
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [pageSize, setPageSize] = useState<number>(25)

  const onPageChange = (page: number) => {
    setCurrentPage(page)
    setParams({...params, page: (page + 1), limit: pageSize})
  }

  const properties = () => {
    return props.props || {}
  }

  return(
    <div style={{ width: '100%' }}>
      <DataGrid
        loading={isLoading}
        autoHeight={true}
        rows={rows}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        paginationMode="server"
        initialState={{
          pagination: { paginationModel: { pageSize, page: currentPage } }
        }}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        rowCount={rowCount}
        onPaginationModelChange={({ pageSize: newPageSize, page }) => {
          setPageSize(newPageSize);
          onPageChange(page);
        }}
        { ...properties() }
      />
    </div>
  )
}

export default DatagridPresenter