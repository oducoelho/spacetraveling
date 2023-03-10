import { GetStaticProps } from 'next';
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

export default function Home() {
  return (
    <>
      <main>
        <Header />
      </main>
      <section className={styles.container}>
        <div className={styles.post}>
          <h1>Como utilizar Hooks</h1>
          <p>Pensando em sincronização em vez de ciclos de vida.</p>
          <div>
            <span>
              <FiCalendar /> 09 Mar 23
            </span>
            <span>
              <FiUser /> Joseph Oliveira
            </span>
          </div>
        </div>

        <div className={styles.post}>
          <h1>Criando um app CRA do zero</h1>
          <p>
            Tudo sobre como criar a sua primeira aplicação utilizando Create
            React App
          </p>
          <div>
            <span>
              <FiCalendar /> 19 Abr 23
            </span>
            <span>
              <FiUser /> Danilo Vieira
            </span>
          </div>
        </div>

        <div className={styles.post}>
          <h1>Como utilizar Hooks</h1>
          <p>Pensando em sincronização em vez de ciclos de vida.</p>
          <div>
            <span>
              <FiCalendar /> 09 Mar 23
            </span>
            <span>
              <FiUser /> Joseph Oliveira
            </span>
          </div>
        </div>

        <div className={styles.post}>
          <h1>Como utilizar Hooks</h1>
          <p>Pensando em sincronização em vez de ciclos de vida.</p>
          <div>
            <span>
              <FiCalendar /> 09 Mar 23
            </span>
            <span>
              <FiUser /> Joseph Oliveira
            </span>
          </div>
        </div>

        <div className={styles.post}>
          <h1>Como utilizar Hooks</h1>
          <p>Pensando em sincronização em vez de ciclos de vida.</p>
          <div>
            <span>
              <FiCalendar /> 09 Mar 23
            </span>
            <span>
              <FiUser /> Joseph Oliveira
            </span>
          </div>
        </div>
        <span className={styles.morePosts}>Carregar mais posts</span>
      </section>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient({});
//   // const postsResponse = await prismic.getByType(TODO);

//   // TODO
// };
