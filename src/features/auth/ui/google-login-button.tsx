'use client';

import Google from '@shared/assets/images/google.svg';

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;
const REDIRECT_URI = `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/callback/google`;

const GoogleLoginButton = () => {
  const handleGoogleLogin = () => {
    const url = new URL('https://accounts.google.com/o/oauth2/v2/auth');
    url.searchParams.set('client_id', GOOGLE_CLIENT_ID);
    url.searchParams.set('redirect_uri', REDIRECT_URI);
    url.searchParams.set('response_type', 'code');
    url.searchParams.set('scope', 'openid email profile');
    window.location.href = url.toString();
  };

  return (
    <button
      className='flex items-center gap-3 rounded-md border border-gray-300 shadow-sm px-6 h-14 text-title !font-regular'
      onClick={handleGoogleLogin}
    >
      <Google size={24} />
      Google 로 시작하기
    </button>
  );
};

export default GoogleLoginButton;
