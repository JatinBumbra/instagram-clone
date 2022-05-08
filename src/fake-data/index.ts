import { faker } from '@faker-js/faker';
import { IComment, IPost, IUser } from './interfaces';

export const getFakeUserData = () => {
  const username = faker.name.fullName();
  const handle = username.split(' ').join('_').toLowerCase();
  return { username, handle, avatar: faker.internet.avatar() } as IUser;
};
export const getRandomImage = () => {
  const methods = Object.values(faker.image).filter(
    (fn) => typeof fn === 'function'
  );
  const random = Math.floor(Math.random() * methods.length);
  const method = methods[random];
  return method();
};

export const getFakePosts = () => {
  const posts: IPost[] = [];

  for (let i = 0; i < 10; i++) {
    const likedBy = [];
    for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
      likedBy.push(getFakeUserData());
    }
    const comments = [];
    for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
      comments.push({
        user: getFakeUserData(),
        comment: faker.random.words(),
      } as IComment);
    }

    posts.push({
      user: getFakeUserData(),
      place: i % 2 === 0 ? faker.address.city() : '',
      description: i % 2 === 0 ? faker.lorem.lines() : faker.lorem.paragraph(),
      created: faker.date.past(),
      comments,
      image: getRandomImage(),
      likedBy,
    });
  }

  return posts;
};
