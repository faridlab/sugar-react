import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import StorageIcon from '@mui/icons-material/Storage'
import PublicIcon from '@mui/icons-material/Public'
import SettingsIcon from '@mui/icons-material/Settings'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function AdministratorMenu() {
  const navigate = useNavigate()
  const [open, setOpen] = useState<Record<string, boolean>>({
    users: false,
    data: false,
    countries: false,
    settings: false,
  })

  const handleClick = (key: string) => {
    const value: boolean = !open[key]
    setOpen({...open, [key]: value})
  }

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Administrator
        </ListSubheader>
      }
    >
      <ListItemButton onClick={() => handleClick('users')}>
        <ListItemIcon>
          <PeopleAltIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
        {open['users'] ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open['users']} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => navigate('/users')}>
            <ListItemText inset primary="Users" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate('/roles')}>
            <ListItemText inset primary="Roles" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate('/permissions')}>
            <ListItemText inset primary="Permissions" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => handleClick('data')}>
        <ListItemIcon>
          <StorageIcon />
        </ListItemIcon>
        <ListItemText primary="Data Master" />
        {open['data'] ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open['data']} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => navigate('/contacts')}>
            <ListItemText inset primary="Contacts" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate('/addresses')}>
            <ListItemText inset primary="Addresses" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate('/files')}>
            <ListItemText inset primary="Files &amp; Media" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => handleClick('countries')}>
        <ListItemIcon>
          <PublicIcon />
        </ListItemIcon>
        <ListItemText primary="Countries" />
        {open['countries'] ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open['countries']} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => navigate('/countries')}>
            <ListItemText inset primary="Countries" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate('/provinces')}>
            <ListItemText inset primary="Provinces" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate('/cities')}>
            <ListItemText inset primary="Cities" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => handleClick('settings')}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
        {open['settings'] ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open['settings']} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => navigate('/sysparams')}>
            <ListItemText inset primary="Sysparams" />
          </ListItemButton>
        </List>
      </Collapse>

    </List>
  )
}
