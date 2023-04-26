import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="darkmodeToggle ">
        <Navbar />

        <Component {...pageProps} />
        <Analytics />
      </div>
    </>
  );
}
