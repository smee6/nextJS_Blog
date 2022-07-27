import styles from '../styles/Home.module.css'
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import Styled from '@emotion/styled'

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <div className={styles.menutitle}>
        블로그
      </div>
      <main className={styles.mainhome}>
        {
          posts.map(post => {
            //extract slug and frontmatter
            const { slug, frontmatter } = post
            //extract frontmatter properties
            const { title, author, category, date, bannerImage, tags } = frontmatter
            //JSX for individual blog listing
            return <article key={title}>
              <Link href={`/posts/${slug}`}>
                <PostH1>{title}</PostH1>
              </Link>
              <h4>{date}</h4>
            </article>
          })}
      </main>
    </div>
  )
}

//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  // get list of files from the posts folder
  const files = fs.readdirSync('posts');

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`./posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  // Return the pages static props
  return {
    props: {
      posts,
    },
  };
}

const PostH1 = Styled.h1`
    font-size: 1.5 rem;
    font-weight: bold;
    margin-bottom: 1rem;
    margin-top: 1rem;
    cursor: pointer;
`;