import { styled, Theme, CSSObject } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import logostartapp from '../../../assets/images/startapp-circle.png'

import ProfileCardPresenter from './sidebar/ProfileCardPresenter'
import SelectContentCard from './sidebar/SelectContentCard'
import Sidemenus from './Sidemenus'

const drawerWidth = 240

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
)

export default function DrawerMenu() {
  return (
  <Drawer variant="permanent" open={true}>
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', p: 2 }}>
      <img src={logostartapp} alt="Startapp logo" style={{ height: '46px', marginTop: '-6px', marginBottom: '-6px' }} />
      <Typography variant="h6" component="h6">
        Startapp
      </Typography>
      {/* <DarkModeSwitcher sx={{ marginTop: '-5px', marginBottom: '-5px' }} defaultChecked /> */}
    </Box>
    <Divider />
    <SelectContentCard />
    <Sidemenus />
    <Divider />
    <ProfileCardPresenter />
  </Drawer>
  )
}
