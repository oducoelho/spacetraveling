import { GetStaticProps } from 'next';
import Link from 'next/link';
import { FiCalendar, FiUser } from 'react-icons/fi';
import Header from '../components/Header';
import { getPrismicClient } from '../services/prismic';
import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Home({ postsPagination }: HomeProps) {
  return (
    <>
      <main className={commonStyles.container}>
        <Header />
      </main>
      <section className={styles.container}>
        {postsPagination.results.map(post => (
          <a className={styles.post}>
            <h1>{post.data.title}</h1>
            <p>{post.data.subtitle}</p>
            <div>
              <span>
                <FiCalendar /> {post.first_publication_date}
              </span>
              <span>
                <FiUser /> {post.data.author}
              </span>
            </div>
          </a>
        ))}
        <span className={styles.morePosts}>Carregar mais posts</span>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});
  const postsResponse = await prismic.getByType('Posts', {
    pageSize: 3,
    orderings: {
      field: 'last_publication_date',
      direction: 'desc',
    },
  });

  const postsPagination = {
    next_page: postsResponse.next_page,
    results: postsResponse.results,
  };

  return {
    props: {
      postsPagination,
    },
  };
};
