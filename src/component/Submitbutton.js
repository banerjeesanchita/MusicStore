import React from 'react'

export default function Button({handleSelect}) {
    console.log("calling from button");
    return (
      
       <button type="button" style={{background:"green",color:"white",fontSize:"2rm"}} onClick={handleSelect}>
      Select Song
       </button>
    )
}