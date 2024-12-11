import { FunctionComponent } from "react";
import {
    useAccount,
    useConnect,
    useDisconnect,
    useStarkProfile,
    useBalance
} from "@starknet-react/core";

const StarkNetConnectButton: FunctionComponent = () => {
    const { address } = useAccount();
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();
    const { data: profile } = useStarkProfile({ address });
    const { data: userBalance, error } = useBalance({
        address: address,
      });

    return !address ? (
        <div className="">
            {connectors.map((connector) => {
                if (connector.available()) {
                    return (
                        <div key={connector.id}>
                            <button className="btn" onClick={() => connect({ connector })}>

                                Connect {connector.name}

                            </button>
                        </div>
                    );
                }
            })}
        </div>
    ) : (
    

    <>
    <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">View Wallet</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><button onClick={() => disconnect()}>Disconnect</button></li>
    <li><a>{profile?.name}</a></li>
    <li><a>Balance: {userBalance?.formatted}</a></li>
    <li><img
            src={profile?.profilePicture}
            width="32"
            height="32"
            className="rounded-full"
          /></li>
  </ul>
</div>
    </>
    );
};

export default StarkNetConnectButton;