import React from 'react'



const Cards = (props) =>  {
    return (
        <div className="card">
            <p> {props.name}</p>
            <br/>
            <p> <a href={props.url}> read more </a> </p>
        </div>
    )
}

export default Cards ;