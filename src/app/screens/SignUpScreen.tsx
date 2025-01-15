import AuthLayout from '../layouts/AuthLayout'
import Content from '../presenters/auth/Content'
import SignUpCard from '../presenters/auth/SignUpCard'

const SignUpScreen = () => {

  return (
    <AuthLayout>
      <Content />
      <SignUpCard />
    </AuthLayout>
  )
}

export default SignUpScreen
