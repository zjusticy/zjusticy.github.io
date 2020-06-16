
import React from "react"
import Layout from '../components/layout';

import styles from './about.module.scss'

import ReactMarkdown from 'react-markdown';
import CodeBlock from '../components/codeBlock';
import { getAllPosts } from '../utils/getLocalData';

// import { rhythm } from "../utils/typography"

const About = ({allPosts}) => {

  return (
    <Layout>
      <div className={`container ${styles.extraSpace}`}>
        <div className={`columns ${styles.columnAlign}`}>
          <section className={`column is-6 ${styles.addPadding}`}>
            <div className="content">
	             <ReactMarkdown
	                source={allPosts[0].content}
	                renderers={{ code: CodeBlock }}
	            />  
            </div>
          </section>          

          <section className={`column is-6 ${styles.addPadding}`}>
            <div className="content">
				 <ReactMarkdown
				    source={allPosts[1].content}
				    renderers={{ code: CodeBlock }}
				/>  
          	</div>

          </section>
        </div>

      </div>

    </Layout>
  )
}

export default About


export async function getStaticProps () {
    // const { slug } = context.query;

    // const markdownWithMetadata = fs
    // .readFileSync(path.join("posts", slug + ".md"))
    // .toString();

  const allPosts = getAllPosts([
    'id',
    'content',
  ], "resume")

  return {
    props: {allPosts},
  }
}