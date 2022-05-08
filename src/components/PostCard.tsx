import {
  IoHeartOutline,
  IoPaperPlaneOutline,
  IoBookmarkOutline,
  IoEllipsisHorizontalSharp,
  IoChatbubbleOutline,
  IoHappyOutline,
} from 'react-icons/io5';
import { IPost } from '../fake-data/interfaces';

const PostCard = ({ data }: { data: IPost }) => {
  return (
    <div className='border bg-white rounded-xl mb-4'>
      <div className='flex items-center justify-between p-2.5'>
        <div className='flex items-center'>
          <div className='h-10 w-10 bg-neutral-200 rounded-full'>
            <img
              src={data.user?.avatar}
              alt={data.user?.handle + 'avatar'}
              className='rounded-full'
            />
          </div>
          <div className='ml-2.5'>
            <p className='font-medium text-sm'>{data.user?.handle}</p>
            <p style={{ fontSize: 12 }}>{data.place}</p>
          </div>
        </div>
        <IoEllipsisHorizontalSharp className='text-lg mr-2 cursor-pointer' />
      </div>
      <div className='min-h-fit w-full bg-neutral-200'>
        <img src={data.image} alt='' />
      </div>
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
            {data.likedBy.slice(0, 3).map((user) => (
              <div
                className='h-7 w-7 outline outline-2 border rounded-full bg-neutral-200 outline-white z-10'
                key={user.handle}
              >
                <img
                  src={user.avatar}
                  alt={user.handle + 'avatar'}
                  className='rounded-full'
                />
              </div>
            ))}
          </div>
          {data.likedBy.length ? (
            <div className='my-2 text-sm'>
              <span>Liked by&nbsp;</span>
              <span className='font-medium'>{data.likedBy[0]?.handle}</span>
              {data.likedBy.slice(1).length > 0 ? (
                <>
                  <span>&nbsp;and&nbsp;</span>
                  <span className='font-medium'>
                    {data.likedBy.slice(1).length} others
                  </span>
                </>
              ) : null}
            </div>
          ) : null}
        </div>
        <div className='text-sm my-2'>
          <span className='font-medium inline-block mr-2'>
            {data.user?.handle}
          </span>
          <span>{data.description}</span>
        </div>
        {data.comments.length ? (
          <p className='text-neutral-500 font-medium text-sm my-2 cursor-pointer'>
            View all {data.comments.length} comments
          </p>
        ) : null}
        <p
          className='my-2 text-neutral-400 text-sm uppercase'
          style={{ fontSize: 12 }}
        >
          {data.created.toDateString()}
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
