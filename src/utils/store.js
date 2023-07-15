import { create } from 'zustand';
import axios from 'axios';

export const useBeerStore = create((set, get) => ({
  beerList: [],
  page: 1,

  fetchBeerList: async page => {
    try {
      const response = await axios.get(
        `https://api.punkapi.com/v2/beers?page=${page}`
      );
      set({ beerList: [...get().beerList, ...response.data] });
    } catch (error) {
      alert(error.message);
    }
  },
}));
