import {
  IoHeartOutline,
  IoPaperPlaneOutline,
  IoBookmarkOutline,
  IoEllipsisHorizontalSharp,
  IoChatbubbleOutline,
  IoHappyOutline,
} from 'react-icons/io5';

const PostCard = () => {
  return (
    <div className='border bg-white rounded-xl mb-4'>
      <div className='flex items-center justify-between p-2.5'>
        <div className='flex items-center'>
          <div className='h-10 w-10 bg-neutral-200 rounded-full'></div>
          <div className='ml-2.5'>
            <p className='font-medium text-sm'>Poster's_handle</p>
            <p style={{ fontSize: 12 }}>Place</p>
          </div>
        </div>
        <IoEllipsisHorizontalSharp className='text-lg mr-2' />
      </div>
      <div className='h-72 w-full bg-neutral-200'></div>
      <div className='p-3'>
        <div className='flex items-center justify-between text-2xl'>
          <div className='flex items-center space-x-4'>
            <IoHeartOutline className='cursor-pointer hover:opacity-50' />
            <IoChatbubbleOutline className='cursor-pointer hover:opacity-50' />
            <IoPaperPlaneOutline className='cursor-pointer hover:opacity-50' />
          </div>
          <IoBookmarkOutline className='cursor-pointer hover:opacity-50' />
        </div>
        <div className='flex items-center my-3 space-x-2'>
          <div className='flex items-center -space-x-2'>
            <div className='h-7 w-7 outline outline-4 border rounded-full bg-neutral-200 outline-white z-10'></div>
            <div className='h-7 w-7 outline outline-4 border rounded-full bg-neutral-200 outline-white'></div>
          </div>
          <div className='my-2 text-sm'>
            <span>Liked by&nbsp;</span>
            <span className='font-medium'>name</span>&nbsp;and&nbsp;
            <span className='font-medium'>others</span>
          </div>
        </div>
        <div className='text-sm my-2'>
          <span className='font-medium inline-block mr-2'>Poster's_handle</span>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            assumenda culpa totam tenetur in facere odit possimus eligendi!
            Dolor a ad numquam nulla repellendus aperiam odit iste consequatur,
            tenetur ex.
          </span>
        </div>
        <p className='text-neutral-500 font-medium text-sm my-2'>
          View all comments
        </p>
        <p
          className='my-2 text-neutral-400 text-sm uppercase'
          style={{ fontSize: 12 }}
        >
          1 Day Ago
        </p>
      </div>
      <div className='border-t p-3 text-sm flex items-center justify-between space-x-3'>
        <IoHappyOutline className='text-2xl' />
        <input
          type='text'
          className='outline-none block flex-1'
          placeholder='Add a comment'
        />
        <div className='text-blue-400 font-bold mr-1 cursor-pointer'>Post</div>
      </div>
    </div>
  );
};

export default PostCard;
