import { Dispatch, SetStateAction } from 'react';

const PostCardContextMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return open ? (
    <>
      <div
        className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 z-40'
        onClick={() => setOpen(false)}
      ></div>
      <div className='fixed w-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 rounded-xl overflow-hidden text-sm shadow'>
        {[
          'Report',
          'Unfollow',
          'Go to post',
          'Share to...',
          'Copy link',
          'Embed',
          'Cancel',
        ].map((option) => (
          <p
            className={`cursor-pointer text-center p-3.5 border-b border-neutral-200 ${
              ['Report', 'Unfollow'].includes(option)
                ? 'text-red-500 font-medium'
                : ''
            } active:bg-neutral-200`}
            onClick={() => setOpen(false)}
          >
            {option}
          </p>
        ))}
      </div>
    </>
  ) : null;
};

export default PostCardContextMenu;
