import React from 'react';
import './App.css';

// import ClassCounter from './components/class/ClassCounter';
import { HookCounterOne } from './components/hook/HookCounterOne';



function App() {
  return (
    <div className="App">
      <header className="App-header">
     {/* <ClassCounter /> */}
     <HookCounterOne />
      </header>
    </div>
  );
}

export default App;
