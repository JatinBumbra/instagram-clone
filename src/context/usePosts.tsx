import { getFakePosts } from '../fake-data';
import { IPost } from '../fake-data/interfaces';

const usePosts = () => {
  const getPosts: () => Promise<IPost[]> = async () => {
    return getFakePosts();
  };

  return { getPosts };
};

export default usePosts;
