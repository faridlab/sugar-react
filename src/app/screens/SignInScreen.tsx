// import useUserAuthenticate from '../hooks/userAuthenticate'
import AuthLayout from '../layouts/AuthLayout'
import Content from '../presenters/auth/Content'
import SignInCard from '../presenters/auth/SignInCard'
import { LoaderFunction, LoaderFunctionArgs, useLoaderData } from "react-router"

export const LoaderData: LoaderFunction = async (params: LoaderFunctionArgs) => {

  console.log('LoaderDataPARAMS', params)
  // const params = useParams()
  // console.log(params)
  // const res = await fetch(`/api/products/${params.pid}`);
  // const product = await res.json();
  // return product;
  console.log('LoaderData')
  return 1;
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

const SignInScreen = () => {
  // const { checkUserToken } = useUserAuthenticate()
  // checkUserToken()
  // const data = useLoaderData<typeof LoaderData>();

  return (
    <AuthLayout>
      <Content />
      <SignInCard />
    </AuthLayout>
  )
}

export default SignInScreen
