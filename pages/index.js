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
                            <Link href='/homepage'>
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
                            <Link href='/application'>
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

            <section class="hero is-halfheight">
                <div class="hero-body">
                    <div class="">
                    <p class="title">
                        1 container
                    </p>
                    <p class="subtitle">
                        1 container subtitle
                    </p>
                    </div>
                </div>
            </section>

            <section class="hero is-primary is-halfheight">
                <div class="hero-body">
                    <div class="">
                    <p class="title">
                        2 container
                    </p>
                    <p class="subtitle">
                        2 container subtitle
                    </p>
                    </div>
                </div>
            </section>

            <section class="hero is-halfheight">
                <div class="hero-body">
                    <div class="">
                    <p class="title">
                        3 container
                    </p>
                    <p class="subtitle">
                        3 container subtitle
                    </p>
                    </div>
                </div>
            </section>
        <footer>
        <section class="hero is-small is-primary">
                <div class="hero-body">
                    <div class="">
                    <p class="title">
                        4 container
                    </p>
                    <p class="subtitle">
                        4 container subtitle
                    </p>
                    </div>
                </div>
            </section>
        </footer>
            
        </div>
        
    )

}

export default Homepage
