import React from 'react';

import './App.css';
// import ClassCounter from './components/ClassCounter';
// import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/hook/HookCounterTwo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      <HookCounterTwo/>
      </header>
    </div>
  );
}

export default App;
