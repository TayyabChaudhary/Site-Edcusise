import React from 'react';
// import logo from './logo.svg';
import './App.css';
import '../node_modules/bulma/css/bulma.min.css';
import Mainpage from './Container/Mainpage/Mainpage';
import Pageloader from './Components/All Section/PageLoader/Pageloader'
function App() {
  return (
    <div>
    <Mainpage/>
    <Pageloader/>
    </div>
  );
}

export default App;
