import { createContext, ReactNode, useContext, useState } from 'react';
import { IUser, IAppContext, IPost } from '../fake-data/interfaces';
import useAuth from './useAuth';
import useFollow from './useFollow';
import usePosts from './usePosts';

const initAppState: IAppContext = {
  activeUser: null,
  posts: [],
  async login() {},
  async logout() {},
  getFollowings: async () => [],
  getSuggestions: async () => [],
  getPosts: async () => {},
  likePost: async () => {},
  unlikePost: async () => {},
};

const AppContext = createContext({ ...initAppState });

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeUser, setActiveUser] = useState<IUser | null>(null);
  const [posts, setPosts] = useState<IPost[]>([]);

  const AuthHook = useAuth();
  const FollowHook = useFollow();
  const PostsHook = usePosts();

  const login = async (username: string, password: string) => {
    const user = await AuthHook.login(username, password);
    setActiveUser(user);
  };

  const logout = async () => {
    const user = await AuthHook.logout();
    setActiveUser(user);
  };

  const getPosts = async () => setPosts(await PostsHook.getPosts());

  const likePost = async (id: string) => {
    setPosts((prev) => {
      const post = prev.find((p) => p.id === id);
      if (!post?.likedBy.includes(activeUser!)) post?.likedBy.push(activeUser!);
      return [...prev];
    });
  };

  const unlikePost = async (id: string) => {
    setPosts((prev) => {
      const post = prev.find((p) => p.id === id);
      const filtered = post?.likedBy.filter(
        (user) => user.handle !== activeUser?.handle
      )!;
      post!.likedBy = [...filtered];
      return [...prev];
    });
  };

  return (
    <AppContext.Provider
      value={{
        activeUser,
        login,
        logout,
        posts,
        getFollowings: FollowHook.getFollowings,
        getSuggestions: FollowHook.getSuggestions,
        getPosts,
        likePost,
        unlikePost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => useContext(AppContext);
