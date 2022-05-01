import Header from './components/Header';
import PostCard from './components/PostCard';
import StoriesCarousal from './components/StoriesCarousal';

function App() {
  return (
    <div className='bg-neutral-100 min-h-screen'>
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
            <div className='flex items-center space-x-4 text-sm my-6'>
              <div className='h-16 w-16 bg-neutral-200 rounded-full'></div>
              <div className='flex-1'>
                <p className='font-medium'>jatinbumbra</p>
                <p className='text-neutral-400'>Jatin Bumbra</p>
              </div>
              <p className='text-blue-400 font-medium'>Switch</p>
            </div>
            <div className='flex items-center justify-between text-sm font-medium'>
              <p className='text-neutral-400'>Suggestions For You</p>
              <p className='cursor-pointer' style={{ fontSize: 12 }}>
                See All
              </p>
            </div>
            {Array(5)
              .fill(1)
              .map((_, i) => (
                <div
                  key={i}
                  className='flex items-center space-x-4 text-sm my-4'
                >
                  <div className='h-10 w-10 bg-neutral-200 rounded-full'></div>
                  <div className='flex-1'>
                    <p className='font-medium'>jatinbumbra</p>
                    <p className='text-neutral-400'>Follows you</p>
                  </div>
                  <p className='text-blue-400 font-medium'>Follow</p>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
