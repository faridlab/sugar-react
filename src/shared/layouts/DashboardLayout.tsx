import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import logostartapp from '../../assets/images/startapp-circle.png'
import PageContainer from './PageContainer'
import SidemenuComponent from './sidemenu';
import ProfileCard from './sidebar/ProfileCard';
import SelectContentCard from './sidebar/SelectContentCard';
import Drawer from '../components/layout/Drawer';

export default function DashboardLayout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
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
        <SidemenuComponent />
        <Divider />
        <ProfileCard />
      </Drawer>
      <PageContainer />
    </Box>
  );
}
