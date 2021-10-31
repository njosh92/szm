import React from 'react';
import { Link } from 'react-router-dom'
import { NFTE } from '@nfte/react';
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
    const { loading, error, nft } = useNft(
        "0x495f947276749ce646f68ac8c248420045cb7b5e",
        "59500887871314328586929315916286422343540281659076133361758735793461173157889",






    )
    let { tree } = useNft(

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
                <button className="btn btn-primary w-100">
                    <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/59500887871314328586929315916286422343540281659076133361758735793461173157889/">Buy/Bid</a>
                </button>
            </section>

        </>
    )
}
function Nft2() {
    const { loading, error, nft } = useNft(
        "0xb798a123fe75292c3873768d01d7f5fc79e05efc",
        "1"






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
                <button className="btn btn-primary w-100">
                    <a href="https://opensea.io/assets/0xb798a123fe75292c3873768d01d7f5fc79e05efc/1/">Buy/Bid</a>
                </button>
            </section>

        </>
    )
}

function Nft3() {
    const { loading, error, nft } = useNft(
        "0x495f947276749ce646f68ac8c248420045cb7b5e",
        "53777808337615213252586245365933897591950077351443440082140745552984293769217"






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
                <button className="btn btn-primary w-100">
                    <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/53777808337615213252586245365933897591950077351443440082140745552984293769217/">Buy/Bid</a>
                </button>
            </section>

        </>
    )
}
function Nft4() {
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
                <button className="btn btn-primary w-100">
                    <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/53777808337615213252586245365933897591950077351443440082140745550785270513665/">Buy/Bid</a>
                </button>
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
