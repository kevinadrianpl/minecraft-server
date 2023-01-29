import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function MyComponent() {
  const router = useRouter();

  useEffect(() => {
    router.push('https://example.com');
  }, []);

  return <div>Redirecting...</div>;
};

export default Map;
