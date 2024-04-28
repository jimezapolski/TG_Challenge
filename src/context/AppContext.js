import React, { useState, createContext, useContext, useEffect, useCallback } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppProvider = ({ defaultValue = [], children }) => {
  const [breweryData, setBreweryData] = useState(defaultValue);
  const [singleBrewetyData, setSingleBreweryData] = useState({});
  const [stateData, setStateData] = useState([])
  const [loading, setLoading] = useState(true);
  const [breweryLoading, setBreweryLoading] = useState(true);

  const handleGetListBreweries = useCallback(async () => {
    setLoading(true);
    try {
      const request = await axios.get('https://api.openbrewerydb.org/v1/breweries');
      setBreweryData(request.data);
      console.log(request.data);

      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    handleGetListBreweries();
  }, [handleGetListBreweries]);
 

  const handleGeSingleBreweryData = useCallback( async (id) => {
    setBreweryLoading(true);
   try {
    const request = await axios.get(`https://api.openbrewerydb.org/v1/breweries/${id}`);
    setSingleBreweryData(request.data);
    setBreweryLoading(false);
   } catch (error) {
    console.log(error)
   }
  },[]);

  const handleGetListBreweriesByState = useCallback(async (query) => {
    setLoading(true);
    try {
      const request = await axios.get(`https://api.openbrewerydb.org/v1/breweries?by_state=${query}&per_page=3`);
      setStateData(request.data);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    handleGetListBreweriesByState("california");
  }, [handleGetListBreweriesByState]);

  return (
    <AppContext.Provider
      value={{
        breweryData,
        handleGetListBreweries,
        loading,
        singleBrewetyData,
        handleGeSingleBreweryData,
        breweryLoading,
        stateData,
        handleGetListBreweriesByState
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
};

export { AppProvider, AppContext };
