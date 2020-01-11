import React, { useEffect, useState, } from 'react'
import axios from 'axios';



const KEY = `9a61b8LdPBMNwodI8AersCSsZl44gAEdWrpqrVzt9fkClmbpOqBSEQGJ`;

let srh_v = 'alter';
const srh = `https://api.happi.dev/v1/music?q=${srh_v}&limit=&apikey=${KEY}&type=`;
state = {
    search:[]
  }

axios.get(srh).then(res => {
    this.setState({ search: res.data.result });
  });
  

const  Search  = () => {
    const  [ counter , setCounter ] = useState(0);

    useEffect(() => {
        console.log("effect")
        return () => {
          console.log("cleanup")
        };
      });


    return (
        <div>
                
        </div>
    )
}


export default Search;