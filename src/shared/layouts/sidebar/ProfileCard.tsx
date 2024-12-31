import { listClasses } from '@mui/material/List'
import ListItemIcon, { listItemIconClasses } from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Badge, badgeClasses, Divider, dividerClasses, IconButton, IconButtonProps, MenuItem, paperClasses, styled } from '@mui/material'
import { Menu } from '@mui/material'
import { CardHeader } from '@mui/material'
import { Avatar } from '@mui/material'
import { Card } from '@mui/material'
import { red } from '@mui/material/colors'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import React from 'react'

export interface MenuButtonProps extends IconButtonProps {
  showBadge?: boolean;
}

export function MenuButton({
  showBadge = false,
  ...props
}: MenuButtonProps) {
  return (
    <Badge
      color="error"
      variant="dot"
      invisible={!showBadge}
      sx={{ [`& .${badgeClasses.badge}`]: { right: 2, top: 2 } }}
    >
      <IconButton size="small" {...props} />
    </Badge>
  );
}

const MenuOptionItem = styled(MenuItem)({
  margin: '2px 0',
});

export function OptionsMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <MenuButton
        aria-label="Open menu"
        onClick={handleClick}
        sx={{ borderColor: 'transparent' }}
      >
        <MoreVertRoundedIcon />
      </MenuButton>
      <Menu
        anchorEl={anchorEl}
        id="menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        sx={{
          [`& .${listClasses.root}`]: {
            padding: '4px',
          },
          [`& .${paperClasses.root}`]: {
            padding: 0,
          },
          [`& .${dividerClasses.root}`]: {
            margin: '4px -4px',
          },
        }}
      >
        <MenuOptionItem onClick={handleClose}>Profile</MenuOptionItem>
        <MenuOptionItem onClick={handleClose}>My account</MenuOptionItem>
        <Divider />
        <MenuOptionItem onClick={handleClose}>Add another account</MenuOptionItem>
        <MenuOptionItem onClick={handleClose}>Settings</MenuOptionItem>
        <Divider />
        <MenuOptionItem
          onClick={handleClose}
          sx={{
            [`& .${listItemIconClasses.root}`]: {
              ml: 'auto',
              minWidth: 0,
            },
          }}
        >
          <ListItemText>Logout</ListItemText>
          <ListItemIcon>
            <LogoutRoundedIcon fontSize="small" />
          </ListItemIcon>
        </MenuOptionItem>
      </Menu>
    </>
  );
}

export default function ProfileCard() {

  return (
    <Card sx={{ borderRadius: 0, pb: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">FH</Avatar>
        }
        action={
        <OptionsMenu />
        }
        title="Farid hidayat"
        subheader="Superadmin"
      />
    </Card>
  )
}
