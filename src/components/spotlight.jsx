import React from 'react';
import { Link } from 'react-router-dom'
import { ethers } from "ethers"
import { NftProvider, useNft } from "use-nft"


// We are using the "ethers" fetcher here.
const fetcher = ["ethers", { ethers, provider: ethers.getDefaultProvider() }]


// Alternatively, you can use the "ethereum" fetcher. Note
// that we are using window.ethereum here (injected by wallets
// like MetaMask), but any standard Ethereum provider would work.
// const fetcher = ["ethereum", { ethereum }]

// Wrap your app with .
function App() {
    return (
        <NftProvider fetcher={fetcher}>
            <Nft />
        </NftProvider>
    )
}

// useNft() is now ready to be used in your app. Pass
// the NFT contract and token ID to fetch the metadata.
function Nft() {
    let url = "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/59500887871314328586929315916286422343540281659076133361758735793461173157889/";
    const { loading, error, nft } = useNft(
        "0x495f947276749ce646f68ac8c248420045cb7b5e",
        "59500887871314328586929315916286422343540281659076133361758735793461173157889",







    )

    // nft.loading is true during load.
    if (loading) return "Loading…"

    // nft.error is an Error instance in case of error.
    if (error) return "Error."
    return (
        <>
            <section className="card emb-card">
                <h1>{nft.name}</h1>
                <img className='emb-card' src={nft.image} alt="" />
                <p>{nft.description}</p>
                <div className="btn btn-primary w-100" >
                    <a href={url}>Buy/Bid</a>
                </div>
            </section>

        </>
    )
}
function Nft2() {
    let url = "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/30674560981034426165185676303070578821263963892885672286070785919606574809089/";
    const { loading, error, nft } = useNft(
        "0x495f947276749Ce646f68AC8c248420045cb7b5e",
        "30674560981034426165185676303070578821263963892885672286070785919606574809089"






    )


    // nft.loading is true during load.
    if (loading) return null

    // nft.error is an Error instance in case of error.
    if (error) return "Error."
    return (
        <>
            <section className="card emb-card">
                <h1>{nft.name}</h1>
                <img className='emb-card' src={nft.image} alt="" />
                <p>{nft.description}</p>
                <div className="btn btn-primary w-100" >
                    <a href={url}>Buy/Bid</a>
                </div>
            </section>

        </>
    )
}

function Nft3() {
    let url = "https://opensea.io/assets/0xa342f5d851e866e18ff98f351f2c6637f4478db5/64471006800991604208317763635640543843668695903654692705941565609783647537152/";
    const { loading, error, nft } = useNft(
        "0xa342f5d851e866e18ff98f351f2c6637f4478db5",
        "64471006800991604208317763635640543843668695903654692705941565609783647537152"






    )


    // nft.loading is true during load.
    if (loading) return null

    // nft.error is an Error instance in case of error.
    if (error) return "Error."
    return (
        <>
            <section className="card emb-card">
                <h1>{nft.name}</h1>
                <img className='emb-card' src={nft.image} alt="" />
                <p>{nft.description}</p>
                
                <div className="btn btn-primary w-100" >
                    <a href={url}>Buy/Bid</a>
                </div>
            </section>

        </>
    )
}
function Nft4() {
    let url = "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/53777808337615213252586245365933897591950077351443440082140745550785270513665/";
    const { loading, error, nft } = useNft(
        "0x495f947276749ce646f68ac8c248420045cb7b5e",
        "53777808337615213252586245365933897591950077351443440082140745550785270513665"






    )


    // nft.loading is true during load.
    if (loading) return null

    // nft.error is an Error instance in case of error.
    if (error) return "Error."
    return (
        <>
            <section className="card emb-card">
                <h1>{nft.name}</h1>
                <img className='emb-card' src={nft.image} alt="" />
                <p>{nft.description}</p>
                <div className="btn btn-primary w-100" >
                    <a href={url}>Buy/Bid</a>
                </div>
            </section>

        </>
    )
}

const Spotlight = (tokenId) => {


    return (

        <div className="container">

            {Nft()}
            {Nft3()}
            {Nft2()}
            {Nft4()}


            <Link to='/' className='btn btn-17'>Back to Market</Link>
        </div>

    )
}

export default Spotlight;
