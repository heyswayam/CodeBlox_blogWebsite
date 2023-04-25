import "@/styles/globals.css";
import Navbar from "@/components/navbar";
export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="darkmodeToggle ">
        <Navbar />

        <Component {...pageProps} />
      </div>
    </>
  );
}
