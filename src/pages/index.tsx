import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
import { usePlaidLink } from 'react-plaid-link';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const { open, ready } = usePlaidLink({
    token: 'link-sandbox-d51610d1-298a-4202-bcc7-a0543494a46f',
    onSuccess: (public_token, metadata) => {
      console.log(public_token, metadata);
    },
  });

  return (
    <main
      className={`flex flex-col min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
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
