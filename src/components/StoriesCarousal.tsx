import { useRef } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

const StoriesCarousal = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

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
        {Array(20)
          .fill(1)
          .map((_, i) => (
            <div key={i}>
              <div className='h-16 w-16 bg-neutral-200 rounded-full'></div>
              <div className='mt-1' style={{ fontSize: 12 }}>
                {`name ${i}`.slice(0, 10)}...
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
