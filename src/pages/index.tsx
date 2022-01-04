import { GetStaticProps } from 'next';
import Link from 'next/link';

import Header from '../components/Header';

import Prismic from '@prismicio/client'
import { getPrismicClient } from '../services/prismic';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

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

export default function Home({ posts }) {
  return (
    <>
      <Header />

      <main>
        <div>
          { posts.map(post => (
            <Link key={post.uid} href={`/post/${post.uid}`}>
              <a>
                <strong>{post.data.title}</strong>
                <p>{post.data.subtitle}</p>
                <time>{post.first_publication_date}</time>
              </a>
            </Link>
          )) }
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const postsResponse = await prismic.query([
    Prismic.predicates.at('document.type', 'posts')
  ], {
    fetch: ['post.title', 'post.author', 'post.content'],
    pageSize: 2,
  });

  const posts = postsResponse.results.map(post => {
    return {
      uid: post?.uid,
      first_publication_date: format(new Date(), ('dd-MM-yyyy'), 
        {
          locale: ptBR,
        }
      ),
      data: {
        title: post.data.title,
        subtitle: post.data.subtitle,
        author: post.data.author
      }
    };
  })

  return {
    props: {
      posts
    }
  }
};
