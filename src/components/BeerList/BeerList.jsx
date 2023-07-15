import useBeerStore from 'utils/store';
import BeerItem from 'components/BeerListItem/BeerListItem';
import { BeerListContainer, DeleteButton } from './BeerList.styled';
import { useEffect, useState } from 'react';

const BeerList = () => {
  const beersList = useBeerStore(state => state.beerList);
  const toggleBeerSelection = useBeerStore(state => state.toggleBeerSelection);
  const selectedBeers = useBeerStore(state => state.selectedBeers);
  const deleteSelectedBeers = useBeerStore(state => state.deleteSelectedBeers);

  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    setIsButtonVisible(selectedBeers.length > 0);
  }, [selectedBeers]);

  const handleRightClick = (event, id) => {
    event.preventDefault();
    toggleBeerSelection(id);
  };

  return (
    <div>
      <DeleteButton isVisible={isButtonVisible} onClick={deleteSelectedBeers}>
        Delete
      </DeleteButton>
      <BeerListContainer>
        {beersList?.slice(0, 15).map(({ id, name, image_url: imageUrl }) => {
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
      </BeerListContainer>
    </div>
  );
};

export default BeerList;
