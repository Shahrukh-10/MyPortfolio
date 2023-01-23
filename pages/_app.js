import "../styles/globals.css";
import { useState,useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return <Component {...pageProps} scroll={clientWindowHeight} />;
}
