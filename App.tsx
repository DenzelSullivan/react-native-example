import React from 'react';
import HelloWorld from './components/HelloWorld'

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <HelloWorld />
    </>
  );
};

export default App;
