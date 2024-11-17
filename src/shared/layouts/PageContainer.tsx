import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Breadcrumbs, IconButton, Link, MenuItem, Menu, Stack, FormControl, Select, InputLabel, InputAdornment, OutlinedInput } from '@mui/material';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DeleteIcon from '@mui/icons-material/Delete'

import { useState, MouseEvent } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import UploadIcon from '@mui/icons-material/Upload';
import DownloadIcon from '@mui/icons-material/Download';
import BarChartIcon from '@mui/icons-material/BarChart';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Grid from '@mui/material/Grid2';

import DataPresenter from '../components/DataPresenter'

export default function PageContainer() {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Breadcrumbs
          separator={<ChevronRightRoundedIcon fontSize="small" sx={{mx: 0}} />}
          aria-label="breadcrumb"
          sx={{fontSize: 'small'}}
        >
          <Link underline="hover" key="1" color="inherit">
            <HomeRoundedIcon fontSize='small' />
          </Link>
          <Link
            underline="hover"
            key="2"
            color="inherit"
            sx={{fontSize: 'small'}}
          >
            Core
          </Link>
          <Typography key="3" sx={{fontSize: 'small'}}>
            Breadcrumb
          </Typography>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: 'flex',
          mb: 1,
          gap: 1,
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'start', sm: 'center' },
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h4" component="h2">
          Orders
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

      <Grid container spacing={2} sx={{mt: 4}}>
        <Grid size={4}>
          <FormControl fullWidth sx={{ m: 1 }}>
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

      <Box
        sx={{
          display: 'flex',
          mb: 1,
          mt: 2,
          gap: 1,
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'start', sm: 'center' },
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <DataPresenter />
      </Box>

  </Box>
  )
}