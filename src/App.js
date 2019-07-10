import React from 'react';
import './App.css';
import MainView from './components/mainView';
import store from './redux_store/state';

function App() {
  return (
    <div className="App">
      <MainView />
    </div>
  );
}

export default App;
