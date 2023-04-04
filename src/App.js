import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContent from './components/Subcontent';
import Advertisement from './components/Advertisement';


function App() {
  return (
    <div className="myApp">
      <Header />
        <Navigation />
        <Main>
          <SubContent />
          <SubContent />
          <SubContent />
          <Advertisement />
        </Main>
    </div>
  );
}

export default App;

