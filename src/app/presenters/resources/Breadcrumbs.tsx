import Typography from '@mui/material/Typography'
import {
  Breadcrumbs,
  Link
} from '@mui/material'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import { Component, memo } from 'react'

export interface BreadcrumbLink {
  label: string;
  link: string;
  icon?: Component;
}
interface BreadcrumbProps {
  links: BreadcrumbLink[];
}

const BreadcrumbGenerator = memo(({ links }: BreadcrumbProps) => {
  if(!links) return <></>

  const rest = links.slice(0, -1)
  let last = links.at(-1)

  return (
  <Breadcrumbs
    maxItems={2}
    separator={<ChevronRightRoundedIcon fontSize="small" sx={{mx: 0}} />}
    aria-label="breadcrumb"
    sx={{fontSize: 'small'}}
  >
    <Link href="/" underline="hover"  color="inherit">
      <HomeRoundedIcon fontSize='small' />
    </Link>

    {rest.map((item , key) =>
      <Link
        key={key}
        underline="none"
        color="inherit"
        sx={{fontSize: 'small'}}
        href={item.link}
      >
      {item.label}
    </Link>
    )}
    {last && <Typography sx={{fontSize: 'small'}}> {last.label}</Typography>}

  </Breadcrumbs>
  )
})

export default BreadcrumbGenerator