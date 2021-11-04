// import * as Web3 from 'web3'
import BigNumber from 'bignumber.js'
import { PortisProvider } from 'portis'
import Portis from '@portis/web3';
import Web3 from 'web3';


const portis = new Portis('1a6fe572-3c73-4419-919b-e3296e77d107', 'mainnet');
const web3 = new Web3(portis.provider);


export const GOOGLE_ANALYTICS_ID = 'UA-111688253-4'
export const OPENSEA_URL =  "https://opensea.io"
export const OPENSEA_JS_URL = "https://www.hiddenstar.io"
export const GITHUB_URL = "https://github.com/njosh92/szm"
export const DEFAULT_DECIMALS = 18
export let web3Provider = typeof web3 !== 'undefined'
  ? window.web3.currentProvider
  : new Web3.providers.HttpProvider('https://mainnet.infura.io')

// Replace this with Redux for more complex logic
const networkCallbacks = []
export const onNetworkUpdate = (callback) => {
  networkCallbacks.push(callback)
}

export async function connectWallet() {
  if (!window.web3) {
    web3Provider = new PortisProvider({
      // Put your Portis API key here
      apiKey: "1a6fe572-3c73-4419-919b-e3296e77d107"
      
    })
  } else if (window.ethereum) {
    window.ethereum.enable()
  } else {
    const errorMessage = 'You need an Ethereum wallet to interact with this marketplace. Unlock your wallet, get MetaMask.io or Portis on desktop, or get Trust Wallet or Coinbase Wallet on mobile.'
    alert(errorMessage)
    throw new Error(errorMessage)
  }
  networkCallbacks.map((c) => c(web3Provider))
}

export function toUnitAmount(baseAmount, tokenContract = null) {
  const decimals = tokenContract && tokenContract.decimals != null
    ? tokenContract.decimals
    : DEFAULT_DECIMALS

  const amountBN = new BigNumber(baseAmount.toString())
  return amountBN.div(new BigNumber(10).pow(decimals))
}

export function toBaseUnitAmount(unitAmount, tokenContract = null) {
  const decimals = tokenContract && tokenContract.decimals != null
    ? tokenContract.decimals
    : DEFAULT_DECIMALS

  const amountBN = new BigNumber(unitAmount.toString())
  return amountBN.times(new BigNumber(10).pow(decimals))
}

export async function promisify(inner) {
  return new Promise((resolve, reject) =>
    inner((err, res) => {
      if (err) { reject(err) }
      resolve(res)
    })
  )
}
