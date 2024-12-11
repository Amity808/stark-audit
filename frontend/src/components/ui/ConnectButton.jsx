import React from 'react'
import { argent, braavos } from "@starknet-react/core";
import {
    useAccount,
    useConnect,
    useDisconnect,
    useStarkProfile,
  } from "@starknet-react/core";
   


const ConnectButton = () => {

    const { address } = useAccount();
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();
    const { data: profile } = useStarkProfile({ address });    

    const handleConnect = () => {
        try {
            connect()
        } catch (error) {
            console.error(error)
        }
    }



  return (
    <div>
      <button className="btn" onClick={handleConnect}>Connect Wallet</button>
      { address ? 
    <>
    {connectors.map((connector) => {
        if (connector.available()) {
          return (
            <div className="mt-5 flex justify-center" key={connector.id}>
              <button className='btn' onClick={() => connect({ connector })}>
               
                  Connect {connector.name}
                
              </button>
            </div>
          );
        }
      })}
    </> : <>
    <button className='btn' onClick={() => disconnect()}>
             Disconnect
           </button>
    </>  
    }
      
    </div>
  )
}

export default ConnectButton
