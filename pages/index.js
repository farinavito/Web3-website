import Head from 'next/head'
import styles from '../styles/Homepage.module.css'
import 'bulma/css/bulma.css'
import Link from 'next/link'

const Homepage = () => {

    return(

        //outside container
        <div className={styles.main}>
            
            <Head>
                <title>Alt World</title>
                <meta name="Alt World" content="Alternative World" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <nav className="navbar has-background-black-ter is-fixed-top">
                <div className="navbar-menu">
                    <div className="container">
                        <div className="navbar-brand">
                        <div className='navbar-item'></div>
                        <div className='navbar-item'></div>
                        <div className='navbar-item'></div>
                        <div className='navbar-item'></div>
                          <div className='navbar-item'>
                            <Link href='/'>
                                <a><h2>Alt World</h2></a>
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

            <section className="hero is-halfheight has-background-black-ter">
                <div className="hero-body">
                  <div className="container has-text-centered">
                    <h1 className="title">
                        Building the alternative world
                    </h1>
                    <p className="has-text-centered pt-4">
                        <br></br>
                        The goal of this project is to disrupt the social and economical principles of this world by leveraging the use of technology<br></br>
                    </p>
                  </div>
                </div>
            </section>
            
            <section className="hero has-background-black-bis is-halfheight">
                <div className="columns">
                  <div className="column has-text-centered mt-6">
                    <h1 className="title ">
                      Use cases
                    </h1>
                  </div>
                </div>
                <div className="hero-body py-0">
                  <div className="container has-text-centered py-0">
                    <div className="columns py-0">
                      <div className="column py-0">
                        <div className="subtitle has-background-black-ter pt-5 pb-3 mb-5 is-size-5 has-text-primary">
                          Legal agreements<br></br><br></br>
                          <p className=" has-background-black-ter py-4 is-size-6">
                            Create contracts with people<br></br>
                            you don't trust or know
                          </p>
                          <div className="box has-background-black-ter pt-4 pb-3">
                            <div className='columns is-centered'>
                              <Link href="/use-cases#firts">
                                <button className="button is-outlined py-2 px-6 is-size-6">Details </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column py-0">
                        <div className="subtitle has-background-black-ter pt-5 pb-3 mb-3 is-size-5 has-text-primary">
                          Financial commitments<br></br><br></br>
                          <p className=" has-background-black-ter py-4 is-size-6">
                            Fulfill your financial obligations<br></br>
                            to your contract's signees
                          </p>
                          <div className="box has-background-black-ter pt-4 pb-3">
                            <div className='columns is-centered'>
                              <Link href="/use-cases#second">
                                <button className="button is-outlined py-2 px-6 is-size-6">Details </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column py-0">
                        <div className="subtitle has-background-black-ter pt-5 pb-3 mb-5 is-size-5 has-text-primary">
                          Vault<br></br><br></br>
                          <p className=" has-background-black-ter py-4 is-size-6">
                            Protect yourself from yourself<br></br>
                            in a bear market
                          </p>
                          <div className="box has-background-black-ter pt-4 pb-3">
                            <div className='columns is-centered'>
                              <Link href="/use-cases#third">
                                <button className="button is-outlined py-2 px-6 is-size-6">Details </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>                         
            </section>

            <section className="hero is-halfheight has-background-black-bis">
                <div className="columns">
                  <div className="column has-text-centered mt-6">
                    <h1 className="title ">
                      How it works
                    </h1>
                    <p className="has-text-centered mt-6">
                    <Link href="/how-it-works">
                      <button className="button is-outlined py-2 px-6 is-size-6">Show more</button>
                    </Link>
                    </p>
                  </div>
                </div>
                <div className="hero-body py-0">
                  <div className="container has-text-centered py-0">
                      <div className="columns py-0">
                        <div className="column py-0">
                          <p className="subtitle has-background-black-ter pt-5 pb-3 mb-5 is-size-6">
                            <br></br>
                            Create a verbal agreement<br></br>
                            with another subject
                            <br></br><br></br>
                          </p>
                        </div>
                        <div className="column py-0">
                          <p className="subtitle has-background-black-ter pt-5 pb-3 mb-5 is-size-6">
                            <br></br>
                            Choose the right smart contract<br></br>
                            for the agreed
                            <br></br><br></br>
                          </p>
                          
                        </div>
                        <div className="column py-0">
                          <p className="subtitle has-background-black-ter pt-5 pb-3 mb-5 is-size-6">
                            <br></br>
                            Follow its rules or<br></br>
                            be penalized
                            <br></br><br></br>
                          </p> 
                        </div>
                        <div className="column py-0">
                          <p className="subtitle has-background-black-ter pt-5 pb-3 mb-5 is-size-6">
                            <br></br>
                            Get the reward or loose a part<br></br>
                            of your transaction
                            <br></br><br></br>
                          </p>
                        </div>
                      </div>
                  </div>
                </div>                         
            </section>

            <section className="hero is-small has-background-black-bis">
                <div className="columns">
                <div className="column has-text-centered mt-6"></div>
                </div>
            </section>

            <section className="hero is-medium has-background-black-bis">
                <div className="columns">
                  <div className="column has-text-centered mt-6">
                    <h1 className="title ">
                      Statistic
                    </h1>
                    <p className="has-text-centered mt-6">
                    <Link href="/statistic">
                      <button className="button is-outlined py-2 px-6 is-size-6">Show more</button>
                    </Link>
                    </p>
                    <div className="column has-text-centered mt-6"></div>
                  </div>
                </div>
            </section>

        <footer>
        <section className="hero is-small has-background-black-bis">
            <div className="hero-body">
              <div className="container has-text-centered">
                <div className="columns">
                  <div className="column has-text-right">
                    <a  target="_blank" rel="noopener noreferrer" href='https://twitter.com/farinavito1'>Twitter</a>
                  </div>
                  <div className="column has-text-left">
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/farinavito'>Github</a>
                  </div>
                </div>
              </div>
            </div>
        </section>
        </footer>
            
        </div>
        
    )

}

export default Homepage
