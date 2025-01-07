import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid"

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'City',
    editable: false,
    width: 260,
    renderCell: (params: GridRenderCellParams) => <a href={`/cities/${params.id}`}>{params.value || ''}</a>,
  },
  {
    field: 'province',
    headerName: 'Province',
    editable: false,
    width: 200,
    renderCell: (params: GridRenderCellParams) => <a href={`/provinces/${params.value.id}`}>{params.value.name || ''}</a>,
  },
  {
    field: 'country',
    headerName: 'Country',
    editable: false,
    width: 160,
    flex: 1,
    renderCell: (params: GridRenderCellParams) => <a href={`/countries/${params.value.id}`}>{params.value.name || ''}</a>,
  },
]

export default columns