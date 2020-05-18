import Link from 'next/link';
import Layout from '../../components/layout';

import styles from './blog.module.scss'

// import { faGithub } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Portrait from '../../content/assets/imgs/portrait'

import { getAllPosts } from '../../utils/getLocalData'
import { dateTrans } from '../../utils/smallTools'

export default function Services({ allPosts }) {
    return (
        <Layout>
            <div className="container">
                <div className="isBlog">
                  <h1 className="title is-1">Tong's Blog</h1>
                  <section className={`${styles.isLeft}`}>
                    <figure className={`is-50x50 ${styles.imgMargin}`}>
                      <Portrait viewBox="0 0 162 162" width="50" height="50" className="eleRound" />
                    </figure>
                    <p className="smallerFont">Explore and learn</p>
                  </section>

                  {allPosts.length ? (
                    <ul className={`${styles.postList}`}>
                      {allPosts.map(post => (
                        <li key={post.slug} className={`${styles.postItem}`}>
                          <Link
                            href={`/blog/${post.slug}`}
                          >
                            <h2 className={`${styles.titlePadding}`}>
                              <a>{post.title}</a>
                            </h2>
                          </Link>
                          <span className={`${styles.date}`}>{dateTrans(post.date)}</span>
                          <p className={`${styles.description}`}>{post.description}</p>
                        </li>
                      ))}
                    </ul>
                  ) : null}           

                </div>

            </div>
        </Layout>
    )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'description',
    'slug',
  ])

  return {
    props: { allPosts },
  }
}

// export async function getStaticProps ({ params: { slug } }) {
//     // const { slug } = context.query;

//     const markdownWithMetadata = fs
//     .readFileSync(path.join("posts", slug + ".md"))
//     .toString();

//   const { data, content } = matter(markdownWithMetadata);
//     // let content = await import(`../../posts/${slug}.md`);
//     // const converter = new Converter({ metadata: true });
//     // const data = matter(content.default)
//     // content = converter.makeHtml(content);
//     // const meta = converter.getMetadata();
//     // return { content, meta };
//     // return {...data};

//       // Parse .md data through `matter`
//   // const data = matter(content.default);


//   const htmlString = marked(content);
//   // Pass data to the component props
//   return { props: {
//           htmlString, 
//           data: data, 
//             }

//         }
// }

