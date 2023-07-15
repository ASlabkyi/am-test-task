import { create } from 'zustand';
import axios from 'axios';

const useBeerStore = create((set, get) => ({
  beerList: [],
  page: 1,
  selectedBeers: [],

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

  toggleBeerSelection: id => {
    set(state => {
      const isSelected = state.selectedBeers.includes(id);
      const updatedSelectedBeers = isSelected
        ? state.selectedBeers.filter(beerId => beerId !== id)
        : [...state.selectedBeers, id];
      return { selectedBeers: updatedSelectedBeers };
    });
  },

  deleteSelectedBeers: () => {
    set(state => {
      const filteredBeerList = state.beerList.filter(
        beer => !state.selectedBeers.includes(beer.id)
      );
      return {
        beerList: filteredBeerList,
        selectedBeers: [],
      };
    });
  },
}));

export default useBeerStore;
