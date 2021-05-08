import * as React from 'react';
import './App.css';
import Navbar from './components/Navbar/Nav';

const App: React.VFC = (): JSX.Element => {
  return (
    <div className="App">
      <Navbar />
      Hello
    </div>
  );
};

export default App;
