import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import BreweryView from '@/components/BreweryView';

const BreweryContainer = ({ id }) => {
  const {singleBrewetyData, handleGeSingleBreweryData, showLoading} = useAppContext();

  useEffect(() => {
    if (id) {
        handleGeSingleBreweryData(id);
    }
  }, [id]);

  return <>
  {!showLoading && <BreweryView brewery={singleBrewetyData} />}
  {showLoading && <p>Loading...</p>}
  </>;
};

export default BreweryContainer;
