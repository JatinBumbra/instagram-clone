import { useEffect, useRef, useState } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { IUser } from '../fake-data/interfaces';
import { useAppContext } from '../context';

const StoriesCarousal = () => {
  const [data, setData] = useState<IUser[]>([]);

  const { getFollowings } = useAppContext();

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    getFollowings().then(setData);
  }, []);

  const handleNext = () => {
    wrapperRef.current?.scrollBy({
      left: wrapperRef.current?.clientWidth,
      behavior: 'smooth',
    });
  };
  const handlePrevious = () => {
    wrapperRef.current?.scrollBy({
      left: -wrapperRef.current?.clientWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div className='flex relative'>
      <div
        className='border bg-white flex space-x-4 flex-1 flex-nowrap overflow-hidden p-4 rounded-xl mb-4 relative'
        ref={wrapperRef}
      >
        {data.map((user, i) => (
          <div key={i} className='cursor-pointer'>
            <div className='h-16 w-16 flex items-center justify-center bg-neutral-200 rounded-full bg-gradient-to-t from-[#f09433] via-[#dc2743] to-[#bc1888]'>
              <img
                src={user.avatar}
                alt={`${user.username} avatar`}
                className='rounded-full h-14 w-14 outline outline-white'
              />
            </div>
            <div className='mt-1' style={{ fontSize: 12 }}>
              {user.handle.length > 10
                ? `${user.handle.slice(0, 10)}...`
                : user.handle}
            </div>
          </div>
        ))}
      </div>
      <div
        className='absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-1.5 shadow-xl cursor-pointer'
        onClick={handlePrevious}
      >
        <IoChevronBackOutline />
      </div>
      <div
        className='absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-1.5 shadow-xl cursor-pointer'
        onClick={handleNext}
      >
        <IoChevronForwardOutline />
      </div>
    </div>
  );
};

export default StoriesCarousal;
