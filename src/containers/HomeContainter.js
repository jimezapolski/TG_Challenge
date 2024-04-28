import React from 'react';
import AlertHome from '../components/AlertHome';
import CardsContainer from './CardsContainer';
import MoreOptions from '@/components/MoreOptions';
import CaliforniaOptions from '@/components/CaliforniaOptions';
import Footer from '@/components/Footer';

const HomeContainer = () => {
  return <>
  
  <AlertHome />
  <MoreOptions />
  <CaliforniaOptions />
  <Footer />
  </>;
};

export default HomeContainer;
