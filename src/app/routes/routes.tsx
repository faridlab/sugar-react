import { createBrowserRouter } from 'react-router';
import DashboardLayout from "../../shared/layouts/DashboardLayout";
import SignInScreen, {LoaderData} from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

const routers = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <DashboardLayout />,
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
