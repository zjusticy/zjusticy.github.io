import Head from 'next/head'
import styles from './index.module.scss';
import Link from 'next/link';

import Layout from '../components/layout';
import Portrait from '../content/assets/imgs/portrait'

import Linkedin from '../content/assets/icons/linkedin'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <Layout>
      <div className="hero is-medium is-backgrd">
        <div className={`hero-body ${styles.lessPadding}`}>
          <div className="container">
            <h1 className="title is-1 is-spaced has-text-white">
              Tong's Site
            </h1> 
            <h2 className={`subtitle is-3 has-text-white ${styles.btmSpace}`}>
              Try to be a web developer
            </h2>
            <div className={styles.vDivider}></div>
            <h3 className="subtitle is-4 has-text-white">
              Stay positive 💪
            </h3>
            <div className={`columns ${styles.isRight}`}>
              <div className={styles.icons}>
                <a href="https://github.com/zjusticy" className={styles.iconLink}>
                  <FontAwesomeIcon icon={faGithub} size="2x" />  
                </a>                
              </div>

              <div className={styles.icons}>
                <a href="#" className={styles.iconLink}>
                  <Linkedin  width="42" />  
                </a>                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`container ${styles.extraSpace}`}>
        <div className="columns">
          <div className="column is-4">
            <Portrait className={`${styles.imgLayout}`}/>
          </div>          

          <div className="column is-8 is-5-widescreen is-offset-2-widescreen">
            <div className="content">
              <h1>About him</h1>
              <p>Tong is a web developer with passion and energy. Ocasionlly, He uses blogs to record his ideas and his thoughts.</p>
              <p className={styles.btmSpace2}>His mind is full of thoughts. And to be a web developer is a great to fulfill his ideas. Simple, elegent and functional design is the goal he wants to achieve.
                React is now the best choice for him to build web applications. </p>
              <button className="button is-normal">
                <Link href="/about">
                  <a className="bodyColor">learn more</a>
                </Link>
              </button>
            </div>
          </div>

        </div>

      </div>



    </Layout>
  )
}
