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
                    <div className='navbar-item'>
                    </div>
                </div>
            </nav>

            <section className="hero is-halfheight">
                <div className="hero-body">
                  <div className="container has-text-centered">
                    <p className="title has-text-centered">
                        Enabling trust between subjects
                    </p>
                    <p className="subtitle  has-text-centered">
                        <br></br>
                        By using smart contrats, we make sure that subjects who don't know eachother and <br></br>
                        don't have physical access to one another, fulfill their obligations to eachother. <br></br>
                    </p>
                  </div>
                </div>
            </section>

            <section className="hero is-primary is-halfheight">
                <div className="columns">
                  <div className="column">
                    <p className="title has-text-centered mt-6">
                      Use cases
                    </p>
                  </div>
                </div>
                <div className="hero-body py-0">
                  <div className="container has-text-centered py-0">
                      <div className="columns py-0">
                        <div className="column py-0">
                          <p className="tittle">Buying and selling goods</p>
                          <p className="subtitle">1</p>
                        </div>
                        <div className="column py-0">
                          <p className="tittle">Buying and selling services</p>
                          <p className="subtitle">2</p>
                        </div>
                        <div className="column py-0">
                          <p className="tittle">Legal agreements</p>
                          <p className="subtitle">3</p>
                        </div>
                        <div className="column py-0">
                          <p className="tittle">Financial commitments</p>
                          <p className="subtitle">4</p>
                        </div>
                      </div>
                  </div>
                </div>                         
            </section>

            <section className="hero is-halfheight">
                <div className="columns">
                  <div className="column">
                    <p className="title has-text-centered mt-6">
                      How it works
                    </p>
                  </div>
                </div>
                <div className="hero-body py-0">
                  <div className="container has-text-centered py-0">
                      <div className="columns py-0">
                        <div className="column py-0">
                          <p className="tittle">Buying and selling goods</p>
                          <p className="subtitle">1</p>
                        </div>
                        <div className="column py-0">
                          <p className="tittle">Buying and selling services</p>
                          <p className="subtitle">2</p>
                        </div>
                        <div className="column py-0">
                          <p className="tittle">Legal agreements</p>
                          <p className="subtitle">3</p>
                        </div>
                        <div className="column py-0">
                          <p className="tittle">Financial commitments</p>
                          <p className="subtitle">4</p>
                        </div>
                      </div>
                  </div>
                </div>                         
            </section>
        <footer>
        <section className="hero is-small is-primary">
            <div className="hero-body">
              <div className="container has-text-centered">
                <p className="subtitle  has-text-centered">
                    <br></br>
                    By using smart contrats, we make sure that subjects who don't know eachother and <br></br>
                    don't have physical access to one another, fulfill their obligations to eachother. <br></br>
                </p>
              </div>
            </div>
        </section>
        </footer>
            
        </div>
        
    )

}

export default Homepage
