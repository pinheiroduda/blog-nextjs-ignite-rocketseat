import { GetStaticProps } from 'next';
import Header from '../components/Header';

import Prismic from '@prismicio/client'
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
    <Header />
  )
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query([
//   //   Prismic.predicates.at('document.type', 'posts')
//   // ], {
    
//   // });

//   // TODO
// };


// const prismic = getPrismicClient();
//   const postsResponse = await prismic.query([
//     Prismic.predicates.at('document.type', 'posts')
//   ], {
//     fetch: ['post.title', 'post.content'],
//     pageSize: 100,
//   });

  
//   const posts = postsResponse.results.map(post => {
//     return {
//       slug: post.uid,
//       title: RichText.asText(post.data.title),
//       excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
//       updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
//         day: '2-digit',
//         month: 'long',
//         year: 'numeric'
//       })
//     };
//   });


//   return {
//     props: {
//       posts,
//     }
//   }