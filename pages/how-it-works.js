import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/How.module.css'

const How = () => {
    return(
        <div className={styles.main}>
            <Head>
                <title>Alt World</title>
                <meta name="Alt World" content="Alternative World" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav className="navbar is-primary is-fixed-top has-background-black-bis">
                <div className="navbar-menu">
                    <div className="container">
                        <div className="navbar-brand">
                        <div className='navbar-item'></div>
                        <div className='navbar-item'></div>
                        <div className='navbar-item'></div>
                        <div className='navbar-item'></div>
                        <div className='navbar-item'>
                            <Link href='/'>
                                <a><h1>Alt World</h1></a>
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
                        <Link href='/use-cases'>
                            <a>Use cases</a>
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
                        <Link href='/statistic'>
                            <a>Statistic</a>
                        </Link>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className='navbar-item'>
                        <Link href='/application'>
                            <a>Enter app</a>
                        </Link>
                    </div>
                    <div className='navbar-item'>
                    </div>
                </div>
            </nav>

            <section className="hero is-medium has-background-black-bis">
                <div className="hero-body">
                  <div className="container has-text-centered">
                    <h4 className="title">
                        Interacting with smart contracts
                    </h4>
                    <br></br>
                    <p className="has-text-left pb-6 pt-4 pl-5 mt-5">
                        <br></br>
                        1. Click on the button "Enter app" in the navbar above<br></br>
                        2. Connect to your wallet by clicking the "Connect wallet" button<br></br>
                        3. Your wallet will open. Enter the password<br></br>
                        4. Choose the smart contract you want to interact with<br></br>
                        5. Act accordingly to the smart contract's specifications <br></br>
                        6. Confirm the transaction in your wallet<br></br>
                        7. You are all done<br></br> 
                    </p>
                  </div>
                </div>
            </section>

            <section className="hero is-halfheight has-background-black-bis">
                <div className="hero-body">
                  <div className="container has-text-centered">
                    <h4 className="title">
                        Sending ether before a certain date
                    </h4>
                    <br></br>
                    <p className="has-text-left pb-6 pt-4 pl-5 mt-5">
                        <br></br>
                        Replace this text
                    </p>
                  </div>
                </div>
            </section>

            <section className="hero is-halfheight has-background-black-bis">
                <div className="hero-body">
                  <div className="container has-text-centered">
                    <h4 className="title">
                        Sending installments before a certain date over a time period
                    </h4>
                    <br></br>
                    <p className="has-text-left pb-6 pt-4 pl-5 mt-5">
                        <br></br>
                        Replace this text
                    </p>
                  </div>
                </div>
            </section>

            <section className="hero is-halfheight has-background-black-bis">
                <div className="hero-body">
                  <div className="container has-text-centered">
                    <h4 className="title">
                        Token vault
                    </h4>
                    <br></br>
                    <p className="has-text-left pb-6 pt-4 pl-5 mt-5">
                        <br></br>
                        This is detailed description of step 5 in Interacting with smart contracts section <br></br>
                        You are now in the Token vault dapp's section and your wallet is connected to dapp <br></br><br></br>
                        1. Go to Deposit section and enter for how long you want to lock up your tokens <br></br>
                        2. Click on the Deposit button <br></br>
                        3. A new pop-up will promp you to confirm the transaction <br></br>
                        4. Before confirming it, you must enter the number of tokens you want to lock up <br></br>
                        5. Confirm the transaction <br></br>
                        6. You will get notified if the transaction succeded or failed

                    </p>
                  </div>
                </div>
            </section>

        </div>
        
    )
}

export default How