import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
import { usePlaidLink } from 'react-plaid-link';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  console.log(router.query.link);

  const { open, ready } = usePlaidLink({
    token: 'link-sandbox-c8a2ae6c-18a5-490c-a979-31a9dbfc5efd',
    onSuccess: (public_token, metadata) => {
      console.log(public_token, metadata);
    },
  });

  return (
    <main className={`flex  min-h-screen flex-col items-center p-24 space-y-4`}>
      <button
        onClick={() => open()}
        disabled={!ready}
        className=' text-white bg-purple-600  p-4 rounded-md'
      >
        Connect a bank account
      </button>
    </main>
  );
}
