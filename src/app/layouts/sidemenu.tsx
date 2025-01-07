import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeIcon from '@mui/icons-material/Home'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'

import AdministratorMenu from '@component/layouts/sidebar/administrator'
import MarketingsMenu from '@component/layouts/sidebar/marketings'
import PostsMenu from '@component/layouts/sidebar/posts'
import { ListItemButton } from '@mui/material'

const SidemenuComponent = () => {
  return (
    <>
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
    </>
  )
}

export default SidemenuComponent
