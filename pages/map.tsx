import type { NextPage } from "next";

const Map: NextPage = () => {
  type Redirect = (url: string) => void;
  
  const redirect: Redirect = (url) => {
    window.location.href = url;
  };

  useEffect(() => {
    redirect('http://dxrery.cyou:3288/');
  }, []);

  return <div>Redirecting...</div>;
};

export default Map;
