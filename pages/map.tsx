import type { NextPage } from "next";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const About: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('http://dxrery.cyou:3288/');
  }, []);

  return <div>Redirecting...</div>;
};

export default About;
