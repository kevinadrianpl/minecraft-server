import type { NextPage } from "next";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Store: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('https://dxrery.tebex.io/');
  }, []);

  return <div>Redirecting...</div>;
};

export default Store;
