export interface IAppContext {
  activeUser: IUser | null;
  posts: IPost[];
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  getFollowings: () => Promise<IUser[]>;
  getSuggestions: () => Promise<IUser[]>;
  getPosts: () => Promise<void>;
  likePost: (id: string) => Promise<void>;
  unlikePost: (id: string) => Promise<void>;
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
