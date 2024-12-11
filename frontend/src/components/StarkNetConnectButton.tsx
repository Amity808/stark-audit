import { FunctionComponent } from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useStarkProfile,
} from "@starknet-react/core";
 
const StarkNetConnectButton: FunctionComponent = () => {
  const { address } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: profile } = useStarkProfile({ address });
 
  return !address ? (
    <div className="">
      {connectors.map((connector) => {
        if (connector.available()) {
          return (
            <div  key={connector.id}>
              <button className="btn" onClick={() => connect({ connector })}>
                
                  Connect {connector.name}
            
              </button>
            </div>
          );
        }
      })}
    </div>
  ) : (
    <button
      onClick={() => disconnect()}
      className="relative w-[300px] h-12 leading-10 text-black font-bold uppercase block text-center border-2 m-1 px-8 py-0 rounded-md"
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-row gap-1.5 items-center justify-around">
          <p className="capitalize font-bold text-base mr-8">
            {profile?.name}
          </p>
          <div className="absolute self-stretch w-px right-16 inset-y-0 bg-black" />
        </div>
        <div>
          <img
            src={profile?.profilePicture}
            width="32"
            height="32"
            className="rounded-full"
          />
        </div>
      </div>
    </button>
  );
};
 
export default StarkNetConnectButton;