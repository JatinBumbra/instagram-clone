import { useEffect, useState } from 'react';
import { IUser } from '../fake-data/interfaces';
import { useAppContext } from '../context';

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState<IUser[]>([]);

  const { activeUser, getSuggestions } = useAppContext();

  useEffect(() => {
    handleFollow();
  }, []);

  const handleFollow = () => getSuggestions().then(setSuggestions);

  return (
    <div>
      <div className='flex items-center space-x-4 text-sm my-6'>
        <div className='h-16 w-16 bg-neutral-200 rounded-full'>
          <img
            src={activeUser?.avatar}
            alt={activeUser?.handle + 'avatar'}
            className='rounded-full'
          />
        </div>
        <div className='flex-1'>
          <p className='font-medium'>{activeUser?.handle}</p>
          <p className='text-neutral-400'>{activeUser?.username}</p>
        </div>
        <p className='text-blue-400 font-medium cursor-pointer'>Switch</p>
      </div>
      <div className='flex items-center justify-between text-sm font-medium'>
        <p className='text-neutral-400'>Suggestions For You</p>
        <p className='cursor-pointer' style={{ fontSize: 12 }}>
          See All
        </p>
      </div>
      {suggestions.map((user, i) => (
        <div key={i} className='flex items-center space-x-4 text-sm my-4'>
          <div className='h-10 w-10 bg-neutral-200 rounded-full'>
            <img
              src={user.avatar}
              alt={user.handle + 'avatar'}
              className='rounded-full'
            />
          </div>
          <div className='flex-1'>
            <p className='font-medium'>{user.handle}</p>
            <p className='text-neutral-400'>{user.username}</p>
          </div>
          <p
            className='text-blue-400 font-medium cursor-pointer'
            onClick={handleFollow}
          >
            Follow
          </p>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
