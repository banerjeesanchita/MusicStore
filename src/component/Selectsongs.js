import React, { Component } from 'react'

export default class Selectsongs extends Component {
    constructor(props){
       super(props);
        this.state={
         
      }
    }
   
      render() {
       
        const songslst=this.props.selectsongs;
        
        return (
            <article >
             
            <h3>Selected Song </h3> 
            <p><b>Song Title:</b>  {songslst.Songstitle} </p>
            <p><b>Artist:</b> {songslst.Artist} <b> Album :</b> {songslst.Album}<br/>
            
            <b>Location  :</b>{songslst.Location} <b>Tag  :</b>{songslst.Tag} <b> Duration  :</b>{songslst.Duration}<br/></p>
            
           
            

        </article>

        )
        }
      } 