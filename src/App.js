import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import { useState, useEffect } from 'react';

//getting the db json
const url =  "http://localhost:8085/stores"

//fetching the store data
function App() {
  const [store, setStore] = useState([])
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setStore(data)   
      })

  }, 
  [])
  
  
  //console.log(store)
  
  
  
  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search />
      <NewStoreForm />
      <StoreList storeData = {store} />
    </div>
  );
}

export default App;
