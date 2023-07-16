import useBeerStore from 'utils/store';
import BeerItem from 'components/BeerListItem/BeerListItem';
import { BeerListContainer, DeleteButton } from './BeerList.styled';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const BeerList = () => {
  const beersList = useBeerStore(state => state.beerList);
  const toggleBeerSelection = useBeerStore(state => state.toggleBeerSelection);
  const selectedBeers = useBeerStore(state => state.selectedBeers);
  const deleteSelectedBeers = useBeerStore(state => state.deleteSelectedBeers);

  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [firstVisibleItemsCount, setFirstVisibleItemsCount] = useState(0);
  const [lastVisibleItemsCount, setLastVisibleItemsCount] = useState(15);

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
    if (lastVisibleItemsCount === 25) {
      return;
    }

    if (inView) {
      setLastVisibleItemsCount(prevCount => prevCount + 5);
      setFirstVisibleItemsCount(prevCount => prevCount + 5);
    }
  }, [inView]);

  return (
    <div>
      <DeleteButton isVisible={isButtonVisible} onClick={deleteSelectedBeers}>
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
