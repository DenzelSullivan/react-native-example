import React from 'react';
import HelloWorld from './components/HelloWorld'
import Data from './components/Data';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      {/* <HelloWorld /> */}
      <Data />
    </>
  );
};

export default App;
