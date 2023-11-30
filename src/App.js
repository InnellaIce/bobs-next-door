import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import { useState, useEffect } from 'react';

//getting the db json
const url = "http://localhost:8085/stores"

//fetching the store data
function App() {
  const [store, setStore] = useState([])

  const [formData, setFormData] = useState([
    {
      "name": "",
      "image": "",
      "season": 0,
      "episode": 0,
      "episodeUrl": "",
      "url": ""
    }]
  )


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setStore(data)
      })

  },
    [formData])


  //Handlers 
  function addStoreHandler(e) {
    e.preventDefault()

    let newFormData = {
      "name": e.target.name.value,
      "image": e.target.image.value,
      "season": e.target.season.value,
      "episode": e.target.episode.value,
      "episodeUrl": "",
      "url": ""
    }

    fetch(`http://localhost:8085/stores/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFormData),

    })
      .then(res => res.json())
      .then(data => setFormData(data))
  }



  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search />
      <NewStoreForm addStoreHandler={addStoreHandler} />
      <StoreList storeData={store} />
    </div>
  );
}

export default App;
