import { createContext, ReactNode, useContext, useState } from 'react';
import { IUser, IAppContext } from '../fake-data/interfaces';
import useAuth from './useAuth';
import useFollow from './useFollow';
import usePosts from './usePosts';

const initAppState: IAppContext = {
  activeUser: null,
  async login() {},
  async logout() {},
  getFollowings: async () => [],
  getSuggestions: async () => [],
  getPosts: async () => [],
};

const AppContext = createContext({ ...initAppState });

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeUser, setActiveUser] = useState<IUser | null>(null);

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

  return (
    <AppContext.Provider
      value={{
        activeUser,
        login,
        logout,
        getFollowings: FollowHook.getFollowings,
        getSuggestions: FollowHook.getSuggestions,
        getPosts: PostsHook.getPosts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => useContext(AppContext);
