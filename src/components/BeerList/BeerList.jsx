import useBeerStore from 'utils/store';
import BeerItem from 'components/BeerListItem/BeerListItem';

const BeerList = () => {
  const beersList = useBeerStore(state => state.beerList);
  const toggleBeerSelection = useBeerStore(state => state.toggleBeerSelection);
  const selectedBeers = useBeerStore(state => state.selectedBeers);
  const deleteSelectedBeers = useBeerStore(state => state.deleteSelectedBeers);

  const handleRightClick = (event, id) => {
    event.preventDefault();
    toggleBeerSelection(id);
  };

  console.log(beersList);

  return (
    <div>
      {selectedBeers.length > 0 && (
        <button
          onClick={deleteSelectedBeers}
          style={{
            width: '100%',
            padding: '25px 30px',
            cursor: 'pointer',
          }}
        >
          Delete
        </button>
      )}
      <ul>
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
      </ul>
    </div>
  );
};

export default BeerList;
