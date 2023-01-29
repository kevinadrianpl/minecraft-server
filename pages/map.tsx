import type { NextPage } from "next";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const About: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('https://dxrery.co.za/map/');
  }, []);

  return <div>Redirecting...</div>;
};

export default About;
