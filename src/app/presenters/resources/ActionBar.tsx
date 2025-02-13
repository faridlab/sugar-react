import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {
  IconButton,
  MenuItem,
  Menu,
  Stack,
  FormControl,
  Select,
  InputLabel} from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete'
import { useState, MouseEvent, useMemo } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'

import AddCircleIcon from '@mui/icons-material/AddCircle'
import UploadIcon from '@mui/icons-material/Upload'
import DownloadIcon from '@mui/icons-material/Download'
import BarChartIcon from '@mui/icons-material/BarChart'
import FilterAltIcon from '@mui/icons-material/FilterAlt'

interface ActionBarProps {
  pageTitle: string;
}
export default function ActionBar({pageTitle}: ActionBarProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const title = useMemo(() => pageTitle, [pageTitle]);
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
  <Box
    sx={{
      display: 'flex',
      gap: 1,
      flexDirection: { xs: 'column', sm: 'row' },
      alignItems: { xs: 'start', sm: 'center' },
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    }}
  >
    <Typography variant="h5" component="h2">
      {title}
    </Typography>

    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="flex-end"
      spacing={1}
    >

      <IconButton>
        <FilterAltIcon />
      </IconButton>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Date</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          label="Date"
        >
          <MenuItem value={'30-days'}>Last 30 days</MenuItem>
          <MenuItem value={'this-month'}>This Month</MenuItem>
          <MenuItem value={'last-month'}>Last Month</MenuItem>
          <MenuItem value={'last-3-month'}>Last 3 Months</MenuItem>
          <MenuItem value={'this-year'}>This Year</MenuItem>
          <MenuItem value={'last-year'}>Last Year</MenuItem>
          <MenuItem value={'custom'}>Custom Range</MenuItem>
        </Select>
      </FormControl>
      {/* <Divider orientation="vertical" flexItem /> */}
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AddCircleIcon fontSize='small' />
          </ListItemIcon>
          Create
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <BarChartIcon fontSize='small' />
          </ListItemIcon>
          Report
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DownloadIcon fontSize='small' />
          </ListItemIcon>
          Import
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <UploadIcon fontSize='small' />
          </ListItemIcon>
          Export
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DeleteIcon color='error' fontSize='small' />
          </ListItemIcon>
          Trash
        </MenuItem>
      </Menu>
    </Stack>
  </Box>
  )
}
