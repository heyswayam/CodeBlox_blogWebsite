import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import "@/styles/globals.css";
import Navbar from "@/components/navbar";

export default function App({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="darkmodeToggle ">
      <Navbar />

      <Component {...pageProps} />

      {isMounted && <Analytics />}
    </div>
  );
}
