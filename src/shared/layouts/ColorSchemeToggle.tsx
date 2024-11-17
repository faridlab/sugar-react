import * as React from 'react';


import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButtonProps, useColorScheme, IconButton } from '@mui/material';

export default function ColorSchemeToggle(props: IconButtonProps) {
  const { onClick, sx, ...other } = props;
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <IconButton
        size="small"
        color="inherit"
        {...other}
        sx={sx}
        disabled
      />
    );
  }
  return (
    <IconButton
      data-screenshot="toggle-mode"
      size="small"
      color="inherit"
      {...other}
      onClick={(event: any) => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
        onClick?.(event);
      }}
      sx={[
        mode === 'dark'
          ? { '& > *:first-child': { display: 'none' } }
          : { '& > *:first-child': { display: 'initial' } },
        mode === 'light'
          ? { '& > *:last-child': { display: 'none' } }
          : { '& > *:last-child': { display: 'initial' } },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <DarkModeRoundedIcon />
      <LightModeIcon />
    </IconButton>
  );
}