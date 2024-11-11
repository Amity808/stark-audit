import "../style/globals.css"
import "@rainbow-me/rainbowkit/styles.css"
import type { AppProps } from "next/app";
import { StarknetProvider } from "@/provider/starknet-provider";

function MyApp({ Component, pageProps }: AppProps) {
    return (
      
        <>
        <StarknetProvider> 
        <Component {...pageProps} />
        </StarknetProvider>
        
        </>
        
         
    );
  }


  export default MyApp;