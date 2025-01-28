import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ArticleIcon from '@mui/icons-material/Article'
import FindInPageIcon from '@mui/icons-material/FindInPage'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import ListItemButton from '@mui/material/ListItemButton'

export default function PostsMenu() {

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="menu-posts"
      subheader={
        <ListSubheader component="div" id="menu-posts">
          Posts &amp; Pages
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText primary="Posts" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <FindInPageIcon />
        </ListItemIcon>
        <ListItemText primary="Pages" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <MenuOpenIcon />
        </ListItemIcon>
        <ListItemText primary="Menus" />
      </ListItemButton>
    </List>
  )
}
