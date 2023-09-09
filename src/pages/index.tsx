import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
import { usePlaidLink } from 'react-plaid-link';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Home() {
  const { open, ready } = usePlaidLink({
    token: 'link-sandbox-65f15906-7c15-4512-a275-5536c56222c9',
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
