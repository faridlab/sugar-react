import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeIcon from '@mui/icons-material/Home'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'

import AdministratorMenu from './sidebar/administrator'
import MarketingsMenu from './sidebar/marketings'
import PostsMenu from './sidebar/posts'
import ListItemButton from '@mui/material/ListItemButton'
import { Alert, AlertTitle, Box } from '@mui/material'
const SidemenuComponent = () => {
  return (
    <Box
      sx={{
        minHeight: 0,
        overflow: 'hidden auto',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Divider />
      <List>
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </List>
      <Divider />
      <PostsMenu />
      <Divider />
      <MarketingsMenu />
      <Divider />
      <AdministratorMenu />
      <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
            This is a success Alert with an encouraging title.
        </Alert>
    </Box>
  )
}

export default SidemenuComponent
