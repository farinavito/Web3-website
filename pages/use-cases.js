import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Cases.module.css'

const Cases = () => {
    return(
        <div className={styles.main}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav className="navbar is-primary is-fixed-top has-background-black-ter">
                <div className="navbar-menu">
                    <div className="container">
                        <div className="navbar-brand">
                            <div className='navbar-item'></div>
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
                        <Link href='/application'>
                            <a>Enter app</a>
                        </Link>
                    </div>
                    <div className='navbar-item'>
                    </div>
                </div>
            </nav>

            <section id='first' className="hero is-medium has-background-black-ter">
                <div className="hero-body">
                  <div className="container has-text-centered">
                    <text className="title">
                    Buy and sell goods
                    </text>
                    <p className="has-text-left pb-6 pt-4 pl-5 mt-5">
                        <h2>The purpose</h2>
                        Increasing economies by providing a worldwide system where buyers and sellers can exchange goods without trusting eachother. 

                        <h2 >How to achieve the above?</h2>
                        By using smart contracts, we will penalize the seller if he/she doesn't send physical or virtual goods to the buyer. 
                        Also, the smart contracts will make sure that the buyer sends the money for the purchase first. 
                        This is how the seller will be protected from the buyer's malice intentions.
                        
                        <h2 >What will you be able to sell and buy?</h2>
                        Any legal physical or virtual goods from any country worldwide. 
                        We will not approve selling or buying any illegal goods on our system.<br></br> 
                        If this rule is breached, we will blacklist the address used in the buying and selling illegal goods.

                        <h2 >When will be this feature implemented?</h2>
                        We can't provide any exact date. However, we are working on it to provide it as soon as possible.
                    </p>
                  </div>
                </div>
            </section>

            <section id="second" className="hero is-medium has-background-black-bis">
                <div className="hero-body">
                  <div className="container has-text-centered">
                    <text className="title">
                    Buy and sell services
                    </text>
                    <p className="has-text-left pb-6 pt-4 pl-5 mt-5">
                    <h2>The purpose</h2>
                        Increasing economies by providing a worldwide system where buyers and sellers can exchange goods without trusting eachother. 
                        <h2 >How to achieve the above?</h2>
                        By using smart contracts, we make sure that subjects who don't know eachother and 
                        don't have physical access to one another, fulfill their obligations to eachother 
                        without cheating the system.
                        <h2 >How to achieve the above?</h2>
                        By using smart contracts, we make sure that subjects who don't know eachother and 
                        don't have physical access to one another, fulfill their obligations to eachother 
                        without cheating the system.
                    </p>
                  </div>
                </div>
            </section>

            <section id='third' className="hero is-medium has-background-black-ter">
                <div className="hero-body">
                  <div className="container has-text-centered">
                    <text className="title">
                    Legal agreements
                    </text>
                    <p className="has-text-left pb-6 pt-4 pl-5 mt-5">
                    <h2>The purpose</h2>
                        Increasing economies by providing a worldwide system where buyers and sellers can exchange goods without trusting eachother. 
                        <h2 >How to achieve the above?</h2>
                        By using smart contracts, we make sure that subjects who don't know eachother and 
                        don't have physical access to one another, fulfill their obligations to eachother 
                        without cheating the system.
                        <h2 >How to achieve the above?</h2>
                        By using smart contracts, we make sure that subjects who don't know eachother and 
                        don't have physical access to one another, fulfill their obligations to eachother 
                        without cheating the system.
                    </p>
                  </div>
                </div>
            </section>

            <section id='forth' className="hero is-medium has-background-black-bis">
                <div className="hero-body">
                  <div className="container has-text-centered">
                    <text className="title">
                    Financial commitments
                    </text>
                    <p className="has-text-left pb-6 pt-4 pl-5 mt-5">
                    <h2>The purpose</h2>
                        Increasing economies by providing a worldwide system where buyers and sellers can exchange goods without trusting eachother. 
                        <h2 >How to achieve the above?</h2>
                        By using smart contracts, we make sure that subjects who don't know eachother and 
                        don't have physical access to one another, fulfill their obligations to eachother 
                        without cheating the system.
                        <h2 >How to achieve the above?</h2>
                        By using smart contracts, we make sure that subjects who don't know eachother and 
                        don't have physical access to one another, fulfill their obligations to eachother 
                        without cheating the system.
                    </p>
                  </div>
                </div>
            </section>

        </div>
        
    )
}

export default Cases