"use client";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";
import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";

export default function Home() {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "b93dc1e8-974f-479b-92b5-eafa7daf92de",
        walletConnectors: [
          EthereumWalletConnectors,
          ZeroDevSmartWalletConnectors,
        ],
      }}
    >
      <DynamicWidget />
    </DynamicContextProvider>
  );
}
