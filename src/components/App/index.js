import React from 'react';
import styled from 'styled-components';
import Log from '../Log'
import { OpenSeaPort, Network } from 'opensea-js';
import { web3Provider, onNetworkUpdate, OPENSEA_JS_URL, GITHUB_URL } from '../../constants';

export default class App extends React.Component {

  state = {
    accountAddress: null
  }

  constructor(props) {
    super(props)
    this.onChangeAddress()
    onNetworkUpdate(this.onChangeAddress)
  }

  onChangeAddress = () => {
    this.seaport = new OpenSeaPort(web3Provider, {
      networkName: Network.Main
    })
    this.web3 = this.seaport.web3
    this.web3.eth.getAccounts((err, res) => {
      this.setState({
        accountAddress: res[0]
      })
    })
  }

  render() {
    return (
      <div>
        <a href={GITHUB_URL}>
          {/* <ImgRibbon src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" alt="Fork me on GitHub" /> */}
        </a>
        <Header>
          <h1>
          Sōtō Zen Market
          </h1>
          <h6>
            <a target="_blank" rel="noopener noreferrer" href={OPENSEA_JS_URL}>
              <img alt="OpenSea logo" className="mr-2" src="/opensea-logo.png" />
            </a> 
          </h6>
        </Header>
        <main>
          <Log className="card"
            seaport={this.seaport}
            accountAddress={this.state.accountAddress} className="card"/>
        </main>
      </div>
    )
  }
}

const Header = styled.header`
  border-bottom: 1px solid lightgrey;
  padding: 10px;
  text-align: center;
  background-color: #040404;

  h6 img {
    width: 84px;
  }
`

const ImgRibbon = styled.img`
  width: 150px;
  position: absolute;
  top: 0;
  right: 0;
  border: 0;

  @media(max-width: 600px) {
    width: 80px;
  }
`