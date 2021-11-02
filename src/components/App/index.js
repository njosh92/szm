import React from 'react';
import styled from 'styled-components';
import Log from '../Log'
import { OpenSeaPort, Network } from 'opensea-js';
import { web3Provider, onNetworkUpdate, OPENSEA_JS_URL, GITHUB_URL } from '../../constants';
import { render } from 'react-dom';
import { VFXDiv, VFXSpan } from 'react-vfx';

import Spotlight from '../spotlight';
import { Link, Switch, Route, Redirect, useHistory, useNavigate } from 'react-router-dom';


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
                
        </a>
        <Header>
          <VFXDiv className='title' shader='shine'>
            Sōtō Zen Market

          </VFXDiv>




          <h6>
            <a target="_blank" rel="noopener noreferrer" href={OPENSEA_JS_URL}>
              <img alt="Site logo" className="mr-2" src="/opensea-logo.png" />
            </a>
          </h6>
          <p className='link'>
            <Link to='/spotlight'>SPOTLIGHT</Link>
          </p>
        </Header>

        <main>

          <Switch>
            <Route exact path="/spotlight">
              <Spotlight />

            </Route>

            <Route exact path='/'>
              <Log className="card"
                seaport={this.seaport}
                accountAddress={this.state.accountAddress} className="card"
              />
            </Route>
          </Switch>




        </main>
      </div>
    )
  }
}

const Header = styled.header`
  border-bottom: 1px solid lightgrey;
  padding: 10px;
  text-align: center;
  background-color: #1b1b1b;

  h6 img {z
    width: 84px;
    color:red:;
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