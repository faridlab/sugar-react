import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import PageContainer from '../presenters/dashboard/PageContainer'
import DrawerMenu from '../presenters/dashboard/DrawerMenu'
import { Outlet } from 'react-router'

export default function DashboardLayout(props: React.PropsWithChildren)  {
  // const { children } = props
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DrawerMenu />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </Box>
  )
}
