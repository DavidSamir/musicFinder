import React from 'react'
import Cardimg from './cardimg/Cardimg' 


const KEY = `?apikey=9a61b8LdPBMNwodI8AersCSsZl44gAEdWrpqrVzt9fkClmbpOqBSEQGJ`
const  Search  = (props) => {
    
    return (
        <>
        <div className="searchCard" key={props.key}>
            <div> 
<h6> <b> track</b>: {props.track} </h6>
<h6> <b> artist</b>: {props.artist} </h6>
<h6> <b> album</b>: {props.album} </h6>
        <Cardimg img={props.api_artist + KEY}/> 
            </div>
            <div>
                <img src={props.cover} />
            </div>
        </div>

        <div>


        </div>

        </>
    )
}


export default Search;