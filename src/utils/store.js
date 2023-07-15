import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { getBeersList } from './services';

const useBeerStore = create(
  persist(
    (set, get) => ({
      beerList: [],
      page: 1,
      selectedBeers: [],
      isFetched: false,
      isLoading: false,

      fetchBeerList: async page => {
        const { isFetched, isLoading } = get();
        if (isFetched || isLoading) {
          return;
        }

        set({ isLoading: true });

        try {
          const data = await getBeersList(page);
          set(state => ({
            beerList: [...state.beerList, ...data],
            isFetched: true,
          }));
        } catch (error) {
          alert(error.message);
        } finally {
          set({ isLoading: false });
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

          if (filteredBeerList.length === 0) {
            const nextPage = state.page + 1;
            state.isFetched = false;
            state.fetchBeerList(nextPage);
            return {
              beerList: filteredBeerList,
              selectedBeers: [],
              page: nextPage,
            };
          }

          return {
            beerList: filteredBeerList,
            selectedBeers: [],
            page: state.page,
          };
        });
      },
    }),
    {
      name: 'beer-store',
      storage: createJSONStorage(() => localStorage),
      onRehydrate: state => {
        if (state.page === 1) {
          state.beerList = [];
        }
      },
    }
  )
);

export default useBeerStore;
