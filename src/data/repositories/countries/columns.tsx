import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid"

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Country',
    editable: true,
    renderCell: (params: GridRenderCellParams) => <a href={`/countries/${params.id}`}>
        <strong>{params.value || ''}</strong>
      </a>,
    // renderEditCell
  },
  {
    field: 'isocode',
    headerName: 'ISO Code',
    editable: true,
  },
  {
    field: 'phonecode',
    headerName: 'Phone Code',
    editable: true,
    flex: 1
  },
]

export default columns