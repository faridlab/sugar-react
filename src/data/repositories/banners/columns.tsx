import { GridColDef } from "@mui/x-data-grid"

const columns: GridColDef[] = [
  {
    field: 'image',
    headerName: 'Image',
    editable: false,
    width: 160,
    renderCell: (params) =>
      params.row.banner?.fullpath ?
      <img
        src={params.row.banner.fullpath}
        alt='banner'
        width={50}
        height={50}
      /> : null,

  },
  {
    field: 'title',
    headerName: 'Name',
    editable: false
  },
  {
    field: 'status',
    headerName: 'Status',
    editable: false,
    flex: 1
  },
]

export default columns