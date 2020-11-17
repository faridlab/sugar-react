import loadable from "@loadable/component";
import Loading from "../views/pages/Loading";

export default [
  {
    path: '/',
    name: 'dashboard',
    component: loadable(() => import('../views/layouts/DashboardLayout'), { fallback: <Loading /> }),
    children: [
      {
        path: '/',
        name: 'dashboard.index',
        component: loadable(() => import('../views/pages/dashboard/home'), { fallback: <Loading /> })
      }
    ]
  }
]
