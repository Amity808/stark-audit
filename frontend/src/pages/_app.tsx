import "../style/globals.css"
import "@rainbow-me/rainbowkit/styles.css"
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return (
      
        <>
        <Component {...pageProps} />
        </>
        
         
    );
  }


  export default MyApp;