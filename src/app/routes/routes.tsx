import { createBrowserRouter } from 'react-router';
import SignInScreen, {LoaderData} from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import DashboardScreen from '../screens/DashboardScreen';

const routers = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <DashboardScreen />,
  },
  {
    path: "/sign-in",
    element: <SignInScreen />,
    loader: LoaderData,
  },
  {
    path: "/sign-up",
    element: <SignUpScreen />,
  },
]);

export default routers
