import { useEffect, useState } from 'react';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import StoriesCarousal from '../components/StoriesCarousal';
import Suggestions from '../components/Suggestions';
import { useAppContext } from '../context';
import { IPost } from '../fake-data/interfaces';

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<IPost[]>([]);

  const { getPosts } = useAppContext();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const posts = await getPosts();
      // setPosts((prev) => [...posts, ...prev]);
      setPosts(posts);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNewPosts = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    fetchPosts();
  };

  return (
    <div>
      <Header />
      <div
        className='fixed bg-white z-10 shadow-xl font-medium text-sm py-2 px-5 border rounded-full top-16 left-1/2 -translate-x-1/2 cursor-pointer w-fit active:bg-neutral-100'
        onClick={fetchNewPosts}
      >
        New Posts
      </div>
      <main className='py-6 mx-auto' style={{ maxWidth: 840 }}>
        <div className='grid grid-cols-12 gap-10'>
          <div className='col-span-7'>
            <StoriesCarousal />
            {!loading && posts.length
              ? posts.map((post) => (
                  <PostCard data={post} key={post.user.handle} />
                ))
              : null}
          </div>
          <div className='col-span-5'>
            <Suggestions />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
