import * as React from 'react'
import matter from 'gray-matter'
// import { withRouter } from 'next/router';
// import { Converter } from 'showdown';
// const glob = require('glob')
import path from "path";
import Link from 'next/link';

import ReactMarkdown from 'react-markdown';

import Layout from '../../components/layout';
import CodeBlock from '../../components/codeBlock';

import { getAllPosts, getPostBySlug } from '../../utils/getLocalData';
import { dateTrans } from '../../utils/smallTools';

// export default function BlogTemplate({ frontmatter, markdownBody, siteTitle }) {
function BlogTemplate({ post  }) {
  // function reformatDate(fullDate) {
  //   const date = new Date(fullDate)
  //   return date.toDateString().slice(4)
  // }

  /*
   ** Odd fix to get build to run
   ** It seems like on first go the props
   ** are undefined — could be a Next bug?
   */

  // if (!frontmatter) return <div></div>
  // const { content, meta: { title }} = props;
  // const frontmatter = data
  return (
    <Layout>

      <div className="isBlog">

        <nav className="breadcrumb is-medium" aria-label="breadcrumbs">
          <ul>
            <li><Link href="/blog"><a>Blog</a></Link></li>
            <li className="is-active"><span></span></li>
          </ul>
        </nav>

        <article>
          <h1 className="title is-2p5">{post.title}</h1>
          <span className={`dateStyle-2`}>{dateTrans(post.date)}</span>
          <div className="content">
             <ReactMarkdown
                source={post.content}
                renderers={{ code: CodeBlock }}
            />           


          </div>

   
          {/*<div className="content" dangerouslySetInnerHTML={{ __html: post.content }} />  */ }         
        </article>
    
        <Link href="/blog">
          <div className="marginTop-2"><a>← Blog</a></div>
        </Link>

      </div>




      {/*<ReactMarkdown source={content} />*/}
    </Layout>
  )
}


export async function getStaticPaths() {
  // const files = fs.readdirSync("posts");

  // const paths = files.map((filename) => ({
  //   params: {
  //     slug: filename.replace(".md", ""),
  //   },
  // }));

  const posts = getAllPosts(['slug'], "posts")

  const paths = posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    }));

  return {
    paths,
    fallback: false,
  };
}




export async function getStaticProps ({ params }) {
    // const { slug } = context.query;

    // const markdownWithMetadata = fs
    // .readFileSync(path.join("posts", slug + ".md"))
    // .toString();


  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
  ], "posts")
 
  // const result = await remark()
  //   .use(html)
  //   .use(highlight)
  //   .process(post.content || '')


  // const content = result.toString();

  return {
    props: {
      post: {
        ...post,
        // content,
      },
    },
  }
}

  // const htmlString = marked(content);
  // // Pass data to the component props
  // return { props: {
  //         htmlString, 
  //         data: data, 
  //           }

  //       }
// }

export default BlogTemplate;
