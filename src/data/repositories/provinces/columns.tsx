import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid"

const columns: GridColDef[] = [
  {
    field: 'country',
    headerName: 'Country',
    editable: false,
    width: 160,
    renderCell: (params: GridRenderCellParams) => <a href={`/countries/${params.value.id}`}>{params.value.name || ''}</a>,
  },
  {
    field: 'name',
    headerName: 'Province',
    editable: false,
    flex: 1,
    renderCell: (params: GridRenderCellParams) => <a href={`/provinces/${params.id}`}>{params.value || ''}</a>,
  },
]

export default columns