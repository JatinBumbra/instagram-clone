export interface IAppContext {
  activeUser: IUser | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  getFollowings: () => Promise<IUser[]>;
  getSuggestions: () => Promise<IUser[]>;
  getPosts: () => Promise<IPost[]>;
}

export interface IUser {
  username: string;
  handle: string;
  avatar: string;
}

export interface IPost {
  id: string;
  user: IUser;
  place?: string;
  likedBy: IUser[];
  description: string;
  comments: IComment[];
  image: string;
  created: Date;
}
export interface IComment {
  user: IUser;
  comment: string;
}
