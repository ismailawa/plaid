import { Inter } from 'next/font/google';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] });
import { usePlaidLink } from 'react-plaid-link';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  console.log(router.query.link);

  const { open, ready } = usePlaidLink({
    token: 'link-sandbox-78c53366-45b3-417d-b2aa-e26e23a9f658',
    onSuccess: (data) => {
      console.log(data);
    },
    onEvent: async (event, metadata) => {
      try {
        await axios.post('http://localhost:8000/api/plaids/webhook/identity', {
          event,
          metadata,
        });
      } catch (error) {
        console.log(error);
      }
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
