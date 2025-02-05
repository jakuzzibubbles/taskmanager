import React from 'react';
import Home from './pages/Home/Home';

const routes = (
  <>
    <Home />
  </>
);

export const App = () => {
  return (
    <div>{routes}</div>
  );
};

export default App;
