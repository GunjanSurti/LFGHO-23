import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/reset.css";
import { WagmiConfig, createConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, sepolia } from 'wagmi/chains';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';

const config = createConfig(
  getDefaultConfig({
    appName: 'ConnectKit CRA demo',
    //infuraId: process.env.REACT_APP_INFURA_ID,
    alchemyId: process.env.ALCHEMY_ID,
    chains: [sepolia, polygon, optimism, arbitrum],
    walletConnectProjectId: process.env.PROJECT_ID,
  })
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <ConnectKitProvider debugMode>
        <App />
      </ConnectKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
