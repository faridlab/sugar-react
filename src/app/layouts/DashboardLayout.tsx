import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import PageContainer from '../presenters/dashboard/PageContainer'
import DrawerMenu from '../presenters/dashboard/DrawerMenu'
import { Outlet } from 'react-router'
import { ResourceContext } from '../contexts'
import { useState } from 'react'
import { BreadcrumbLink } from '../presenters/resources/Breadcrumbs'

interface ResourceContextData {
  ctx?: BreadcrumbLink[];
  pageTitle?: string;
}

export default function DashboardLayout(props: React.PropsWithChildren)  {
  // const { children } = props
  const [ ctx, setContext ] = useState<ResourceContextData>({})
  return (
    <ResourceContext.Provider value={{ctx, setContext}}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DrawerMenu />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </Box>
    </ResourceContext.Provider>
  )
}
