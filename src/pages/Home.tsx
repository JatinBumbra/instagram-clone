import Header from '../components/Header';
import PostCard from '../components/PostCard';
import StoriesCarousal from '../components/StoriesCarousal';
import Suggestions from '../components/Suggestions';

const Home = () => {
  return (
    <div>
      <Header />
      <main className='py-6 mx-auto' style={{ maxWidth: 840 }}>
        <div className='grid grid-cols-12 gap-10'>
          <div className='col-span-7'>
            <StoriesCarousal />
            {Array(10)
              .fill(1)
              .map((_, i) => (
                <PostCard key={i} />
              ))}
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
