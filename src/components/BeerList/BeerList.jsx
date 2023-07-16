import { useBeersStore } from 'utils/store';
import BeerItem from 'components/BeerListItem/BeerListItem';
import { BeerListContainer, DeleteButton } from './BeerList.styled';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const BeerList = () => {
  const { beersList, toggleBeerSelection, selectedBeers, deleteSelectedBeers } =
    useBeersStore();

  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [firstVisibleItemsCount, setFirstVisibleItemsCount] = useState(0);
  const [lastVisibleItemsCount, setLastVisibleItemsCount] = useState(15);
  const [canLoad, setCanLoad] = useState(true);

  useEffect(() => {
    setIsButtonVisible(selectedBeers.length > 0);
  }, [selectedBeers]);

  const handleRightClick = (event, id) => {
    event.preventDefault();
    toggleBeerSelection(id);
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '0px 0px 200px 0px',
  });

  useEffect(() => {
    if (inView && canLoad) {
      setLastVisibleItemsCount(prevCount => prevCount + 5);

      setFirstVisibleItemsCount(prevCount => prevCount + 5);
    }
  }, [inView, canLoad, beersList]);

  useEffect(() => {
    if (lastVisibleItemsCount >= beersList.length) {
      setCanLoad(false);
    } else {
      setCanLoad(true);
    }
  }, [lastVisibleItemsCount, beersList]);

  const handleDeleteSelectedBeers = () => {
    deleteSelectedBeers();
    setFirstVisibleItemsCount(0);
    setLastVisibleItemsCount(15);
  };

  return (
    <div>
      <DeleteButton
        isVisible={isButtonVisible}
        onClick={handleDeleteSelectedBeers}
      >
        Delete
      </DeleteButton>
      <BeerListContainer>
        {beersList
          ?.slice(firstVisibleItemsCount, lastVisibleItemsCount)
          .map(({ id, name, image_url: imageUrl }) => {
            return (
              <BeerItem
                key={id}
                id={id}
                name={name}
                imageUrl={imageUrl}
                handleRightClick={handleRightClick}
                selected={selectedBeers.includes(id)}
              />
            );
          })}
        <div ref={ref} />
      </BeerListContainer>
    </div>
  );
};

export default BeerList;
