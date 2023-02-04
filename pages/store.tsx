import type { NextPage } from "next";
import { useEffect } from 'react';

const Map: NextPage = () => {
  const redirect = (url: string) => {
    window.location.href = url;
  };

  useEffect(() => {
    redirect('https://dxrery.tebex.io/');
  }, []);

  return <div>Redirecting...</div>;
};

export default Shop;
