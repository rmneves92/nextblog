import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';

const DUMMY_POSTS = [
  {
    slug: 'getting-stated-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a React framework for production - it makes building fullstack React apps and sites breeze and ships with built-in server side rendering',
    date: '2022-02-10',
  },
  {
    slug: 'getting-stated-with-nextjs2',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a React framework for production - it makes building fullstack React apps and sites breeze and ships with built-in server side rendering',
    date: '2022-02-10',
  },
  {
    slug: 'getting-stated-with-nextjs3',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a React framework for production - it makes building fullstack React apps and sites breeze and ships with built-in server side rendering',
    date: '2022-02-10',
  },
  {
    slug: 'getting-stated-with-nextjs4',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a React framework for production - it makes building fullstack React apps and sites breeze and ships with built-in server side rendering',
    date: '2022-02-10',
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;
