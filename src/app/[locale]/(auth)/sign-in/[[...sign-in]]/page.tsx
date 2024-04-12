import { SignIn, SignUpButton } from '@clerk/nextjs';
import Link from 'next/link';

const SignInPage = () => {
  return (
    <>
      <h1>Sign In Page</h1>
      <SignUpButton/>
    </>
  );
};
export default SignInPage;