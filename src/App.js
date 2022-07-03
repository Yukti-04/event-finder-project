import React from 'react';
import Main from './components/Main';
import { GlobalProvider } from './context/gState';
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <GlobalProvider>
      
      <Main /><SearchBar/> 
    </GlobalProvider>
  );
}

export default App;