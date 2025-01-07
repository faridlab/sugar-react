import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'
import GavelIcon from '@mui/icons-material/Gavel'
import { ListItemButton } from '@mui/material'

export default function MarketingsMenu() {

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="menu-marketings"
      subheader={
        <ListSubheader component="div" id="menu-marketings">
          Marketing &amp; Contents
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <ViewCarouselIcon />
        </ListItemIcon>
        <ListItemText primary="Banners" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <QuestionAnswerIcon />
        </ListItemIcon>
        <ListItemText primary="F.A.Q" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <GavelIcon />
        </ListItemIcon>
        <ListItemText primary="Terms &amp; Condition" />
      </ListItemButton>
    </List>
  )
}
