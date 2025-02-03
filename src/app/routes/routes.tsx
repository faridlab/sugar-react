import { createBrowserRouter } from 'react-router';
import SignInScreen, {LoaderData} from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import DashboardScreen from '../screens/DashboardScreen';
import AuthenticatedRoutes from '../presenters/auth/Authenticated';
import AuthenticatedToDashboard from '../presenters/auth/AuthenticatedToDashboard';
import ResourcesIndexScreen, { ResourcesDetailScreen } from '../screens/resources';
import DashboardLayout from '../layouts/DashboardLayout';

const routers = createBrowserRouter([
  {
    element: <AuthenticatedToDashboard />,
    children: [
      {
        path: "/sign-in",
        element: <SignInScreen />,
        loader: LoaderData,
      },
      {
        path: "/sign-up",
        element: <SignUpScreen />,
      },
    ]
  },

  // Authenticated routes
  {
    element: <AuthenticatedRoutes />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/",
            index: true,
            element: <DashboardScreen />,
          },
          {
            path: "/:collection",
            element: <ResourcesIndexScreen />,
            loader: LoaderData,
          },
          {
            path: "/:collection/:id",
            element: <ResourcesDetailScreen />,
          },
        ]
      },
    ]
  }
]);

export default routers
