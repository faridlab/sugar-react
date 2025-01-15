import { Routes, Route } from "react-router";
import DashboardLayout from "../../shared/layouts/DashboardLayout";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

export default function Routers() {
  return (
    <Routes>
      <Route index element={<DashboardLayout />} />
      <Route path="sign-in" element={<SignInScreen />} />
      <Route path="sign-up" element={<SignUpScreen />} />
      {/* <Route index element={<Home />} /> */}
      {/* <Route path="about" element={<About />} />

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="concerts">
        <Route index element={<ConcertsHome />} />
        <Route path=":city" element={<City />} />
        <Route path="trending" element={<Trending />} />
      </Route>

      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      */}
    </Routes>
  )
}