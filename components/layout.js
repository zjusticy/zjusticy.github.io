import styles from './layout.module.scss';
import Link from 'next/link';
import House from '../content/assets/icons/house'

import { useRouter } from 'next/router'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Layout(props) {

    const router = useRouter()

    const myClasses = (path, pwd) => {
        


        if (path.match(pwd)) {
            return `navbar-item ${styles.moreMargin} ${styles.addBorder}`;
        }
        else {
            return `navbar-item ${styles.moreMargin}`;
        }

    }

    return (

        <div>
        <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
          <div className='container'>
            <div className="navbar-brand">
              <Link  href="/">
                <a className="navbar-item"><House /></a>
              </Link>

              <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-end">
                <Link  href="/">
                  <a className={myClasses(router.pathname, new RegExp('^\/$'))}>Home</a> 
                </Link>

                <Link  href="/blog">
                  <a className={myClasses(router.pathname, new RegExp('^\/blog'))}>Blog</a>
                </Link>

                <Link  href="/about">
                  <a className={myClasses(router.pathname, new RegExp('^\/about$'))}>About</a>
                </Link>
              </div>

            </div>
          </div>
        </nav>

        <main>{props.children}</main>
        <footer className={`${styles.myFooter}`}>
          <div className="container">
            <div>
                Email me: 
                {`  `}
                <FontAwesomeIcon icon={faEnvelope} />
                {` `}
                <a href="mailto:tzhu618@gmail.com">tzhu618@gmail.com</a>

            </div>
            <div className={styles.lastColor}>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://nextjs.org/">NextJs</a>
                {` and `}
                <a href="https://bulma.io">Bulma</a>               
            </div>
              

          </div>

        </footer>
      </div>
    );
}