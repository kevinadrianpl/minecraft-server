import type { NextPage } from "next";

const Map: NextPage = () => {
  type Redirect = (url: string) => void;
  
  const redirect: Redirect = (url) => {
    window.location.href = url;
  };

  useEffect(() => {
    redirect('https://dxrery.tebex.io/');
  }, []);

  return <div>Redirecting...</div>;
};

export default Store;
