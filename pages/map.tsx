import type { NextPage } from "next";
import { useEffect } from 'react';

const Map: NextPage = () => {
  const redirect = (url: string) => {
    window.location.href = url;
  };

  useEffect(() => {
    redirect('http://dxrery.cyou:3288/');
  }, []);

  return <div>Redirecting...</div>;
};

