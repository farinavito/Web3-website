import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Cases.module.css'

const Cases = () => {
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
                        <Link href='/Use cases'>
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

            <section id='first' className="hero is-medium has-background-black-bis">
                <div className="hero-body">
                  <div className="container has-text-centered">
                    <h4 className="title">
                    Legal agreements
                    </h4>
                    <article className="has-text-left pb-6 pt-4 pl-5 mt-5">
                        <h2>The purpose</h2>
                        Enabling people to have access to creation of legal agreements with other subjects in their community or worldwide.

                        <h2 >How to achieve the above?</h2>
                        By using smart contracts, we make sure that subjects who don't know eachother and 
                        don't have physical access to one another, fulfill their obligations to eachother 
                        without cheating the system.

                        <h2 >What kind of legal agreements will be implemented?</h2>
                        We will ask our community to help us find the most usefull legal agreements for them.

                        <h2 >When will these features be implemented?</h2>
                        We can't provide any exact date. However, we are trying to provide it as soon as possible.

                        <h2 >Which blockchains will be used to deploy the smart contracts?</h2>
                        We haven't yet decided, but we will surely deploy them to many blockchains.
                        Probably, we will first deploy them on Ethereum L2 solutions..  

                        <h2 >How much commission will we charge?</h2>
                        Nothing, you can use it for free.
                    </article>
                  </div>
                </div>
            </section>

            <section id='second' className="hero is-medium has-background-black-bis">
                <div className="hero-body">
                  <div className="container has-text-centered">
                    <h4 className="title mb-6">
                    Financial commitments
                    </h4>
                    <article className="has-text-left pb-6 pt-4 pl-5 mt-5">
                        <h2>The purpose</h2>
                        Enabling people to create financial agreements with other subjects all over the world.

                        <h2 >How to achieve the above?</h2>
                        By using smart contracts, we make sure that subjects who don't know eachother and 
                        don't have physical access to one another, fulfill their obligations to eachother 
                        without cheating the system.

                        <h2 >What kind of financial agreements will be implemented?</h2>
                        Currently, there are two:<br></br>
                        1) Enabling person A to commit sending payment every X amount to person B every Y time period for the duration of Z time starting at Q.<br></br>
                        2) Enabling person A to commit sending a payment till T.<br></br>
                        
                        <h2 >When will these features be implemented?</h2>
                        Both of the features mentioned above are already implemented.

                        <h2 >Which blockchains will be used to deploy the smart contracts?</h2>
                        We haven't yet decided, but we will surely deploy them to many blockchains.
                        Probably, we will first deploy them on Ethereum L2 solutions.

                        <h2 >How much commission do we charge?</h2>
                        Nothing, you can use it for free.
                    </article>
                  </div>
                </div>
            </section>

            <section id='third' className="hero is-medium has-background-black-bis">
                <div className="hero-body">
                  <div className="container has-text-centered">
                    <h4 className="title mb-6">
                    Token vault
                    </h4>
                    <article id='new' className="has-text-left pb-6 pt-4 pl-5 mt-5">
                        <h2>The purpose</h2>
                        Enabling people to not get emotional in the bear markets and sell ethers.
                        
                        <h2>How to achieve the above?</h2>
                        The user can send ethers to the smart contract and specifies from which date onwards can the ethers be withdrawn.

                        <h2>Which tokens can be locked in this vault?</h2>
                        Currently, only ethers. We will discuss pros ans cons of creating a vault for other tokens and see if this would be a beneficial project. 

                        <h2 >When will these features be implemented?</h2>
                        The vault for locking ether is already implemented.

                        <h2 >Which blockchains will be used to deploy the smart contracts?</h2>
                        Firstly, the smart contracts will be deployed on the Ethereum mainnet. 
                        After some time we will deploy them to other Ethereum L2 scaling solutions.  
                        We haven't yet decided which scalin solutions will be used.

                        <h2 >How much commission do we charge?</h2>
                        Nothing, you can use it for free.
                    </article>
                  </div>
                </div>
            </section>

        </div>
        
    )
}

export default Cases