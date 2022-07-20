import './App.css';
// import {BrowserRouter} from 'react-router-dom'
// import Routes from './routes'
import Header from './components/Header';
import Footer from './components/Footer';
import CharacterTable from './components/CharacterTable'
import axios from 'axios';
import React , {useEffect,useState} from 'react';
import Search from './components/Search';
import Video from './components/Video';


const hash = "9f869ebd659f6b00c8c0854491e8a5ae"

function App() {
  const [items,setItems] = useState([])
  const [isLoading,setLoading] = useState(true)
  const [query,setQuery] = useState('')



useEffect(() => {
  
  const fetch = async() => {
    if(query=== ''){
    if(localStorage.getItem('favorites')==='[]' || !localStorage.getItem('favorites')){
       localStorage.setItem('favorites', '[]')
      const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=bd265955b50e3ac86216e4f6d14644f8&hash=${hash}`)
      console.log(result.data.data.results)
      setItems(result.data.data.results)
      setLoading(false)
    }else{
          let favorite = JSON.parse(localStorage.getItem('favorites'))
          setItems(favorite)
          setLoading(false)
    } 
    
  }else{
      const result = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}ts=1&apikey=bd265955b50e3ac86216e4f6d14644f80&hash=${hash}`)
      console.log(result.data.data.results)
      setItems(result.data.data.results)
      setLoading(false)

      }
   
  }
    fetch()
} ,[query])

  return (
    <div className="Container">
  
      <Header />
      <Video />
      <Search search={(q) =>setQuery(q)}></Search>
      <CharacterTable items={items} isLoading={isLoading} />
     <Footer />
 
    </div>
  );
}

export default App;
