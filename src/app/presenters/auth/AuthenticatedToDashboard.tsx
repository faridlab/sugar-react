import { NavigateFunction, Outlet } from "react-router"
import { jwtDecode } from "jwt-decode"
import { getCookie } from "../../utils/cookies"
import { useNavigate } from "react-router"
import { Suspense, useEffect } from "react"

export function middleware(navigate: NavigateFunction) {

  const token = getCookie('bearer_token')
  if(!token) {
    return
  }
  const decoded = jwtDecode<{ exp: number }>(token)
  const timenow = new Date().getTime()
  if ((decoded.exp * 1000) > timenow) {
    navigate('/')
    return
  }
}

function Loading() {
  return <h2>Authenticating...</h2>
}

export default function AuthenticatedToDashboard()  {
  const navigate = useNavigate()
  useEffect(() => {
    middleware(navigate)
  }, [navigate])

  return (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  )
}