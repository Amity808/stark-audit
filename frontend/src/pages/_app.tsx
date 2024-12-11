import "../style/globals.css"
import "@rainbow-me/rainbowkit/styles.css"
import type { AppProps } from "next/app";
import { StarknetProvider } from "@/provider/starknet-provider";
import { sepolia, mainnet } from "@starknet-react/chains";
import {
    StarknetConfig,
    publicProvider,
    argent,
    braavos,
    useInjectedConnectors,
    voyager
  } from "@starknet-react/core";


function MyApp({ Component, pageProps }: AppProps) {

    const { connectors } = useInjectedConnectors({
        // Show these connectors if the user has no connector installed.
        recommended: [
          argent(),
          braavos(),
        ],
        // Hide recommended connectors if the user has any connector installed.
        includeRecommended: "onlyIfNoConnectors",
        // Randomize the order of the connectors.
        order: "random"
      });
    return (
      
        <>
        <StarknetProvider> 
        <Component {...pageProps} />
        </StarknetProvider>
        
        </>
        
         
    );
  }


  export default MyApp;