import { getFakeUserData } from '../fake-data';

const useFollow = () => {
  const getFollowings = async () => {
    const followings = [];
    for (let i = 0; i < 20; i++) followings.push(getFakeUserData());
    return followings;
  };

  const getSuggestions = async () => {
    const suggestions = [];
    for (let i = 0; i < 5; i++) suggestions.push(getFakeUserData());
    return suggestions;
  };

  return { getFollowings, getSuggestions };
};

export default useFollow;
