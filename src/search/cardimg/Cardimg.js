import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Popup from "reactjs-popup";

    
const  Cardimg  = (props) => {
let [cvr , setCover] = useState({ cover:"" })
    
    useEffect( () => {
        axios.get(props.img).then(res => {
            setCover({ cover: res.data.result.cover });
            });
        } , [])
    return (
    
    <>
    <div>
        
    </div>
    <Popup trigger={<span >View Artist</span>} position="right center">
        <img src={cvr.cover} />
    </Popup>
    </>
    )
}


export default Cardimg;