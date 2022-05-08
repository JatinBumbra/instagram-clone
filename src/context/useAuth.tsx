import { faker } from '@faker-js/faker';
import { IUser } from '../fake-data/interfaces';

const useAuth = () => {
  const login = async (username: string, password: string) => {
    if (username !== 'jatinbumbra') throw new Error('Invalid credentials');

    return {
      username: 'Jatin Bumbra',
      handle: username,
      avatar: faker.internet.avatar(),
    } as IUser;
  };

  const logout = () => null;

  return { login, logout };
};

export default useAuth;
