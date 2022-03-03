import 'bulma/css/bulma.css'
import { useState } from 'react'
import styles from '../styles/application.module.css'
import Head from 'next/head'
import Web3 from 'web3'
import Link from 'next/link'

const App = () => {

    const [error, setError] = useState('')

    let web3;

    const connectWalletHandler = async () => {
        if (typeof window !== "undefined" && typeof window.ethereum !== "undefined"){
            //metamask installed
            try {
                await window.ethereum.request({ method: "eth_requestAccounts"})
                web3 = new Web3(window.ethereum)
            } catch(err) {
                setError(err.message)
            }
            
        } else {
            //metamask not installed
            alert("Please install MetaMask")
        }
    }

    return (
        <div className={styles.main}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav className="navbar is-primary is-fixed-top">
                <div className="navbar-menu">
                    <div className="container">
                        <div className="navbar-brand">
                        <div className='navbar-item'>
                            <Link href='/'>
                                <a><h1>A web app</h1></a>
                            </Link>
                        </div> 
                        </div>
                    </div> 
                </div>
                
                <div className="navbar-end">
                <div className='navbar-item'>
                        <Link href='/why'>
                            <a>Why</a>
                        </Link>
                </div>
                </div>
                <div className="navbar-end">
                <div className='navbar-item'>
                        <Link href='/how-it-works'>
                            <a>How it works</a>
                        </Link>
                    </div>
                </div>
                <div className="navbar-end">
                <div className='navbar-item'>
                    <Link href='/application'>
                        <a>Enter app</a>
                    </Link>
                </div>
                </div>
                <div className='navbar-end'>
                <div className='navbar-item'>
                    <button onClick={connectWalletHandler} className="button is-primary">Connect wallet</button>
                </div>
                </div>
                <div className='navbar-item'>
                    
                </div>
            </nav>

            
            <section>
                <div className="container">
                    <p>Text</p>
                </div>
            </section>
            <section>
                <div className="container has-text-danger">
                    <p>{error}</p>
                </div>
            </section>
        </div>
        
    )
}

export default App