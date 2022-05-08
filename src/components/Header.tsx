import { useState } from 'react';
import InstagramWordmark from '../assets/Instagram-wordmark.svg';
import {
  IoSearchOutline,
  IoHomeOutline,
  IoChatbubbleOutline,
  IoAddCircleOutline,
  IoCompassOutline,
  IoHeartOutline,
  IoPersonCircleSharp,
  IoPersonCircleOutline,
  IoBookmarkOutline,
  IoCogOutline,
  IoSyncOutline,
} from 'react-icons/io5';
import { useAppContext } from '../context';

const Header = () => {
  const [userOptionsOpen, setUserOptionsOpen] = useState<boolean>(false);

  const { logout, activeUser } = useAppContext();

  return (
    <header className='sticky top-0 border-b bg-white z-50'>
      <div
        className='container mx-auto py-4 flex items-center justify-between relative'
        style={{ maxWidth: 940 }}
      >
        <img
          src={InstagramWordmark}
          alt='instagram wordmark'
          className='h-7 -mb-2'
        />
        <div className='absolute left-1/2 -translate-x-1/2 bg-neutral-200 py-1.5 px-4 flex items-center rounded-md space-x-2'>
          <IoSearchOutline className='text-neutral-400 text-xl' />
          <input
            type='text'
            className='outline-none bg-transparent'
            placeholder='Search'
          />
        </div>
        <div className='flex items-center space-x-5 text-2xl'>
          <IoHomeOutline className='cursor-pointer' />
          <IoChatbubbleOutline className='cursor-pointer' />
          <IoAddCircleOutline className='cursor-pointer' />
          <IoCompassOutline className='cursor-pointer' />
          <IoHeartOutline className='cursor-pointer' />
          <div className='relative'>
            <div
              className={`rounded-full flex items-center justify-center h-7 w-7 ${
                userOptionsOpen ? 'outline outline-1' : ''
              }`}
            >
              <img
                src={activeUser?.avatar}
                alt={activeUser?.handle + 'avatar'}
                className={`cursor-pointer rounded-full h-6 w-6 outline outline-white`}
                onClick={() => setUserOptionsOpen((prev) => !prev)}
              />
            </div>
            {userOptionsOpen ? (
              <div className='absolute top-9 -left-48 shadow-md bg-white rounded-md'>
                {[
                  { icon: <IoPersonCircleOutline />, label: 'Profile' },
                  { icon: <IoBookmarkOutline />, label: 'Saved' },
                  { icon: <IoCogOutline />, label: 'Settings' },
                  { icon: <IoSyncOutline />, label: 'Switch Accounts' },
                ].map((option) => (
                  <div
                    key={option.label}
                    className='flex px-3 py-2.5 items-center space-x-2 w-56 hover:bg-neutral-50 cursor-pointer text-xl'
                    onClick={() => setUserOptionsOpen(false)}
                  >
                    {option.icon}
                    <p className='text-sm'>{option.label}</p>
                  </div>
                ))}
                <div className='flex p-3 items-center space-x-2 w-56 hover:bg-neutral-50 cursor-pointer text-xl border-t'>
                  <p className='text-sm' onClick={logout}>
                    Log Out
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
