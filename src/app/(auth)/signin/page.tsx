import GoogleLoginButton from '@features/auth/ui/google-login-button';
import Logo from '@shared/assets/images/logo.svg';
import SigninHeader from '@widgets/header/ui/signin';

const Signin = () => {
  return (
    <div className='flex flex-col items-center gap-40'>
      <SigninHeader />
      <main className='flex items-center flex-col gap-20'>
        <Logo />
        <GoogleLoginButton />
      </main>
    </div>
  );
};

export default Signin;
