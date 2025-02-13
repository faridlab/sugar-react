import Box from '@mui/material/Box'

import { useContext } from 'react'

import { ResourceContext } from '../../contexts'
import BreadcrumbGenerator from '../resources/Breadcrumbs'
import ActionBar from '../resources/ActionBar'
import FilterBar from '../resources/FilterBar'

export default function PageContainer(props: React.PropsWithChildren) {
  const { children } = props
  const { ctx, setContext } = useContext(ResourceContext)

  return (
  <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
      <BreadcrumbGenerator links={ctx.breadcrumbs} />
    </Box>
    <ActionBar pageTitle={ctx.pageTitle} />
    <FilterBar />
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
      {children}
    </Box>
  </Box>
  )
}