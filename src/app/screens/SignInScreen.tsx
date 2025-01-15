import AuthLayout from '../layouts/AuthLayout'
import Content from '../presenters/auth/Content'
import SignInCard from '../presenters/auth/SignInCard'

const SignInScreen = () => {

  return (
    <AuthLayout>
      <Content />
      <SignInCard />
    </AuthLayout>
  )
}

export default SignInScreen
