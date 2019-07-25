import React, { Component } from 'react'

export default class Selectsongs extends Component {
    // constructor(props){
    //    super(props);
    //     this.state={
         
    //   }
    // }
    render() {
       
       // const  {songslst}=this.props.songslst;
        console.log("from selected songs list",this.props);
        let songs=this.props.selectsongs.map(function(songslst,counter){
          return(
            <article >
            <div>hello</div>
        <h3>Song </h3> 
        <p><b>Song Title:</b>  {songslst.Songstitle} </p>
        <p><b>Artist:</b> {songslst.Artist} <b> Album :</b> {songslst.Album}<br/>
        
        <b>Location  :</b>{songslst.Location} <b>Tag  :</b>{songslst.Tag} <b> Duration  :</b>{songslst.Duration}<br/></p>
        </article>
          )
        });
        return (
           
           <section>
             {songs}
           </section>
            

       
        )
      }
    }

