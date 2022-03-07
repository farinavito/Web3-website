import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/How.module.css'

const How = () => {
    return(
        <div className={styles.main}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>How</h1>

            <nav className="navbar is-primary is-fixed-top has-background-black-ter">
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
                    <div className='navbar-item'>
                    </div>
                </div>
            </nav>

            <section className="hero is-halfheight has-background-black-ter">
                <div className="hero-body">
                  <div className="container has-text-centered">
                    <text className="title">
                        Enabling trust between subjects
                    </text>
                    <p className="has-text-centered pt-4">
                        <br></br>
                        By using smart contrats, we make sure that subjects who don't know eachother and <br></br>
                        don't have physical access to one another, fulfill their obligations to eachother <br></br>
                        without cheating the system.
                    </p>
                  </div>
                </div>
            </section>

            <section className="hero is-halfheight has-background-black-bis">
                <div className="hero-body">
                  <div className="container has-text-centered">
                    <text className="title">
                        Enabling trust between subjects
                    </text>
                    <p className="has-text-centered pt-4">
                        <br></br>
                        By using smart contrats, we make sure that subjects who don't know eachother and <br></br>
                        don't have physical access to one another, fulfill their obligations to eachother <br></br>
                        without cheating the system.
                    </p>
                  </div>
                </div>
            </section>

            <section className="hero is-halfheight has-background-black-ter">
                <div className="hero-body">
                  <div className="container has-text-centered">
                    <text className="title">
                        Enabling trust between subjects
                    </text>
                    <p className="has-text-centered pt-4">
                        <br></br>
                        By using smart contrats, we make sure that subjects who don't know eachother and <br></br>
                        don't have physical access to one another, fulfill their obligations to eachother <br></br>
                        without cheating the system.
                    </p>
                  </div>
                </div>
            </section>

        </div>
        
    )
}

export default How