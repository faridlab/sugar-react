import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  InputAdornment,
  OutlinedInput
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'

import Grid from '@mui/material/Grid2'

interface FilterBarProps {
  // pageTitle: string;
}
export default function FilterBar(props: FilterBarProps) {
  return (
  <Grid container spacing={2} sx={{mt: 2}}>
    <Grid size={4}>
      <FormControl fullWidth sx={{ my: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start"><SearchIcon fontSize='small' /></InputAdornment>}
          label="Search"
          size="small"
        />
      </FormControl>
    </Grid>
    <Grid>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Field</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          label="Field"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Field</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          label="Field"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Field</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          label="Field"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Field</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          label="Field"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Field</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          label="Field"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  </Grid>
  )
}
