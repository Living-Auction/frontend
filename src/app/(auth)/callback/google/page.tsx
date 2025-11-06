'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { syncUserToDB } from '@features/auth/api/sync-user';
import { handleGoogleOAuth } from '@features/auth/model/google-auth.server';
import { useTokenStore } from '@shared/store/token';

export default function GoogleCallbackPage() {
  const router = useRouter();
  const params = useSearchParams();
  const code = params.get('code');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const setAccessToken = useTokenStore((state) => state.setToken);

  useEffect(() => {
    if (!code) {
      setError('인증 코드가 유효하지 않습니다.');
      setLoading(false);
      return;
    }

    (async () => {
      try {
        const user = await handleGoogleOAuth(code);
        const tokenData = await syncUserToDB(user);

        if (tokenData?.accessToken) {
          setAccessToken(tokenData.accessToken);
          router.push('/');
        } else {
          throw new Error('서버에서 토큰을 받지 못했습니다.');
        }
      } catch (err) {
        console.error('OAuth 로그인 실패:', err);
        setError('로그인에 실패했습니다. 잠시 후 다시 시도해주세요.');
      } finally {
        setLoading(false);
      }
    })();
  }, [code, router, setAccessToken]);

  if (loading) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <p className='text-gray-900 text-lg'>로그인 중입니다...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex flex-col items-center justify-center h-screen text-center'>
        <p className='text-negative-900 text-lg font-semibold mb-3'>{error}</p>
        <button
          onClick={() => router.push('/signin')}
          className='px-4 py-2 bg-primary-900 text-white rounded-lg'
        >
          로그인 페이지로 돌아가기
        </button>
      </div>
    );
  }

  return null;
}
