import axios from 'axios';

axios.defaults.baseURL = 'https://api.punkapi.com/v2/beers';

export const getBeersList = async numberPage => {
  const { data } = await axios.get('', {
    params: {
      page: numberPage,
    },
  });
  return data;
};
