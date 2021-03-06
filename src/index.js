import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { VFXProvider } from 'react-vfx';
import { NftProvider, useNft } from "use-nft"
import './index.css';
import { GOOGLE_ANALYTICS_ID } from './constants';
import { ethers } from "ethers"


const fetcher = ["ethers", { ethers, provider: ethers.getDefaultProvider() }]

// Google Analytics loading
if (process.env.NODE_ENV === "production") {
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', GOOGLE_ANALYTICS_ID);
} else {
  console.info("Not loading Google Analytics in " + process.env.NODE_ENV + " environment")
}

// Main render action
ReactDOM.render(
  <VFXProvider>
    <NftProvider fetcher={fetcher}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NftProvider>
  </VFXProvider>,
  document.getElementById('root'));
