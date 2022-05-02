const Suggestions = () => {
  return (
    <div>
      <div className='flex items-center space-x-4 text-sm my-6'>
        <div className='h-16 w-16 bg-neutral-200 rounded-full'></div>
        <div className='flex-1'>
          <p className='font-medium'>jatinbumbra</p>
          <p className='text-neutral-400'>Jatin Bumbra</p>
        </div>
        <p className='text-blue-400 font-medium cursor-pointer'>Switch</p>
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
          <div key={i} className='flex items-center space-x-4 text-sm my-4'>
            <div className='h-10 w-10 bg-neutral-200 rounded-full'></div>
            <div className='flex-1'>
              <p className='font-medium'>jatinbumbra</p>
              <p className='text-neutral-400'>Follows you</p>
            </div>
            <p className='text-blue-400 font-medium cursor-pointer'>Follow</p>
          </div>
        ))}
    </div>
  );
};

export default Suggestions;
