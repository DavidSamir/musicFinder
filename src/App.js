import React, { useEffect, useState, Component } from 'react'
import './App.css';
import Cards from './cards/Cards';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const KEY = `9a61b8LdPBMNwodI8AersCSsZl44gAEdWrpqrVzt9fkClmbpOqBSEQGJ`;
let page = '1';
const url = `https://api.happi.dev/v1/music/artists?page=${page}&apikey=${KEY}`;
let srh_v = 'alter';
const srh = `https://api.happi.dev/v1/music?q=${srh_v}&limit=&apikey=${KEY}&type=`;

// const  [ counter , setCounter ] = useState(0);
class App extends Component {
  state = {
      artists:[],
      search:[]
    }
    componentDidMount() {
    axios.get(url).then(res => {
      this.setState({ artists: res.data.result });
    });


    
    axios.get(srh).then(res => {
      this.setState({ search: res.data.result });
    });
    
  }
  

  
  render () {
    // useEffect(() => {
    //   console.log("effect")
    //   return () => {
    //     console.log("cleanup")
    //   };
    // });
    


    console.log(this.state)
        return (
          <Router>
            <div className="App">
              <header className="App-header">
          <div>
          <h1> ARTISTS API </h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/artists">Artists</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/artists">
                <section>
                  <div>
                    {/* <span onClick={() => { setCounter(counter + 1 )}}> {counter} </span> */}
                    <span onClick={() => { page = '2' ; console.log(page)}}> 2 </span>
                    <span > 3 </span>
                    <span > 4 </span>
                    <span > 5 </span>
                  </div>
                  <div className="cardplaceholder"> 
                    {this.state.artists.map(artist =>  <Cards key={artist.id_artist} name={artist.artist} url={artist.cover}/>)}
                  </div>
                </section>
              </Route>
              <Route path="/users">
                Users
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
}

export default App;
