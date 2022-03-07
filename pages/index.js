import Head from 'next/head'
import styles from '../styles/Homepage.module.css'
import 'bulma/css/bulma.css'
import Link from 'next/link'

const Homepage = () => {
    return(
        //outside container
        <div className={styles.main}>
            
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <nav className="navbar has-background-black-ter is-fixed-top">
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
            
            <section className="hero has-background-black-bis is-halfheight">
                <div className="columns">
                  <div className="column has-text-centered mt-6">
                    <text className="title ">
                      Use cases
                    </text>
                  </div>
                </div>
                <div className="hero-body py-0">
                  <div className="container has-text-centered py-0">
                      <div className="columns py-0">
                        <div className="column py-0">
                          <p className="subtitle has-background-black-bis pt-5 pb-3 mb-3">
                            Buy and sell goods<br></br><br></br>
                            <p className="box has-background-black-bis py-1">
                              <Link href="/application"><a>Read more</a></Link>
                            </p>
                          </p>
                          <p className="has-background-black-bis py-4"></p>
                        </div>
                        <div className="column py-0">
                          <p className="subtitle pt-5 pb-3 mb-3">
                            Buy and sell services<br></br><br></br>
                            <p className="box has-background-black-bis py-1">
                              <Link href="/application"><a>Read more</a></Link>
                            </p>
                          </p>
                          <p className=" has-background-black-bis py-4"></p>
                        </div>
                        <div className="column py-0">
                          <p className="subtitle has-background-black-bis pt-5 pb-3 mb-3">
                            Legal agreements<br></br><br></br>
                            <p className="box has-background-black-bis py-1">
                              <Link href="/application"><a>Read more</a></Link>
                            </p>
                          </p>
                          <p className=" has-background-black-bis py-4"></p>
                        </div>
                        <div className="column py-0">
                          <p className="subtitle has-background-black-bis pt-5 pb-3 mb-3">
                            Financial commitments<br></br><br></br>
                            <p className="box has-background-black-bis py-1">
                              <Link href="/application"><a>Read more</a></Link>
                            </p>
                          </p>
                          <p className=" has-background-black-bis py-4"></p>
                        </div>
                      </div>
                  </div>
                </div>                         
            </section>

            <section className="hero is-halfheight has-background-black-ter">
                <div className="columns">
                  <div className="column has-text-centered mt-6">
                    <text className="title ">
                      How it works
                    </text>
                    <p className="has-text-centered mt-6">
                      <Link href="how-it-works">
                        <a>Read the details</a>
                      </Link>
                      
                    </p>
                  </div>
                </div>
                <div className="hero-body py-0">
                  <div className="container has-text-centered py-0">
                      <div className="columns py-0">
                        <div className="column py-0">
                          <p className="subtitle has-background-black-bis pt-5 pb-3 mb-5">
                            Create a verbal agreement<br></br>
                            with another subject
                            <p className="box has-background-black-bis py-1">
                            <Link href=""><a><br></br></a></Link>
                            </p>
                          </p>
                          <p className="has-background-black-ter py-4"></p>
                        </div>
                        <div className="column py-0">
                          <p className="subtitle has-background-black-bis pt-5 pb-3 mb-5">
                            Choose the right smart contract<br></br>
                            for the agreed
                            <p className="box has-background-black-bis py-1">
                            <Link href=""><a><br></br></a></Link>
                            </p>
                          </p>
                          <p className="has-background-black-ter py-4"></p>
                        </div>
                        <div className="column py-0">
                          <p className="subtitle has-background-black-bis pt-5 pb-3 mb-5">
                            Follow its rules or<br></br>
                            be penalized
                            <p className="box has-background-black-bis py-1">
                            <Link href=""><a><br></br></a></Link>
                            </p>
                          </p>
                          <p className="has-background-black-ter py-4"></p>
                        </div>
                        <div className="column py-0">
                          <p className="subtitle has-background-black-bis pt-5 pb-3 mb-5">
                            Get the reward or<br></br>
                            loose a part of your transaction
                            <p className="box has-background-black-bis py-1">
                            <Link href=""><a><br></br></a></Link>
                            </p>
                          </p>
                          <p className="has-background-black-ter py-4"></p>
                        </div>
                      </div>
                  </div>
                </div>                         
            </section>
        <footer>
        <section className="hero is-small has-background-black-ter">
            <div className="hero-body">
              <div className="container has-text-centered">
                <div className="columns">
                  <div className="column has-text-right">
                    <Link href='https://twitter.com/farinavito1'>
                      <a>Twitter</a>
                    </Link>
                  </div>
                  <div className="column has-text-left">
                    <Link href='https://github.com/farinavito'>
                        <a>Github</a>
                    </Link>
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
