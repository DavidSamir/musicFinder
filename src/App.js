import React, { useEffect, useState , setCount } from 'react'
import './App.css';
import Cards from './cards/Cards';
import Search from './search/Search';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const KEY = `9a61b8LdPBMNwodI8AersCSsZl44gAEdWrpqrVzt9fkClmbpOqBSEQGJ`;
let srh_v = 'alter';

const App = () => {
  let [artistVal, setArtistVal] = useState(1)
  let [artistRes , setArtistRes] = useState({ artists:[] })
  let [searchVal, setSearchVal] = useState('alter');
  let [searchRes , setSearchRes] = useState({ search:[] })

  const url = `https://api.happi.dev/v1/music/artists?page=${artistVal}&apikey=${KEY}`;
  const srh = `https://api.happi.dev/v1/music?q=${searchVal}&limit=&apikey=${KEY}&type=`;
    useEffect( () => {
      console.log("im fetching!")
      axios.get(url).then(res => {
        setArtistRes({ artists: res.data.result });
          console.log(res.data.result)
        });
      } , [artistVal])




      // get the val 
      const getVal = (a) => {
        setArtistVal(a.target.innerHTML);
        // console.log(parseInt(page))
        // a.target.parentElement.children[parseInt(page)].classList.remove("active")
        // a.target.classList.add("active");
      }




      useEffect( () => {
        console.log("im Searching mate!")
        axios.get(srh).then(crh => {
          setSearchRes({ search: crh.data.result });
            console.log(crh.data.result)
  
          });
        } , [searchVal])

        const srhVal = (a) => {
          setSearchVal(a.target.value);
          console.log(a.target.value)
          // a.target.parentElement.children[parseInt(page)].classList.remove("active")
          // a.target.classList.add("active");
        }




// const fetchart = () => { }
// axios.get(srh).then(res => {
//   setState({ search: res.data.result });
// });
// useEffect(() => {
//   console.log("effect")
//   return () => {
//     console.log("cleanup")
//   };
// });

        return (
          <Router>
            <div className="App">
              <header className="App-header">
          <div>
          <h1>ARTISTS API</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/artists">Artists</Link>
                </li>
                <li>
                  <Link to="/search">search</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/artists">
                <section>
                  <div className="pageOrder">
                    <span onClick={getVal} value="1" >1</span>
                    <span onClick={getVal} value="2" >2</span>
                    <span onClick={getVal} value="3" >3</span>
                    <span onClick={getVal} value="4" >4</span>
                    <span onClick={getVal} value="5" >5</span>
                  </div>
                  <div className="cardplaceholder"> 
                    {artistRes.artists.map(artist =>  <Cards key={artist.id_artist} name={artist.artist} url={artist.cover}/>)}
                  </div>
                </section>
              </Route>
              <Route path="/search">
                <input type="search" onChange={srhVal} />
                {searchRes.search.map(srh =>  <Search key={srh.track} artist={srh.artist} album={srh.album}/>)}
              </Route>
              <Route path="/">
                this is jsut app for music
              </Route>
            </Switch>
          </div>
                </header>
              </div>
        </Router>

    );
  }

export default App;
