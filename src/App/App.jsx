import React from 'react';
import { AppUI } from './AppUI';
import { MovieProvider } from '../context/context';


function App() {
  return (
    <MovieProvider>
      <AppUI/>
    </MovieProvider>
  );
}

export {App};
