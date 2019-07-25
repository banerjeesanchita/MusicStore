import React, { Component } from 'react'
import Song from './Song'
import SongsData from '../Data/SongsData'
import Selectsongs from './Selectsongs'

export default class CreateSrcComp extends Component {
 
    constructor(props){
     super(props)
      this.displaysong=[];
      this.counter=0;
      this.checkedsong=[];
      this.state={
      
         songs:SongsData,
         selectsonglist:[...this.displaysong],
        // counter:counter
        
         
        
       };
      
     }
      
     callbackfunct=(param,d)=>{
       console.log ("d",d);
        this.checkedsong=d;
        console.log("checkedsong",this.checkedsong);
       if(param==='check')
       {
          this.state.selectsonglist.push(d);
           console.log("selectedsongs...",this.state.selectsonglist);

        this.setState({
          selectsonglist:this.state.selectsonglist
       
        });
        this.counter=this.counter+1;
       }
      
      
       console.log("select songs",this.state.selectsonglist);
     }

     
    
     renderSongs=()=>{
      // let val=this.state.counter;
      this.counter=this.counter+1;
      //  this.setState({
      //    counter:val
      //  })
       console.log("list in submit",this.state.selectsonglist);
       
       console.log("counter" ,this.counter);
       console.log("songs", this.state.selectsonglist.length);
       if(this.state.counter===0)  
         return <p>this is no songs selected</p>;
         else
         return <p>some songs selected</p>;
     }
    
    render() {
   
        return (
            <section>
                  
                
                 { this.state.songs.map((item)=>(<Song key={item.id} info={item} callbackfunct={(param,item)=>this.callbackfunct(param,item)} ></Song>) ) }
              
                {this.state.selectsonglist.length>0 ?
                 this.state.selectsonglist[0].map((songitem,key)=><Selectsongs key={key} selectsongs={songitem}></Selectsongs>)
                :<p>No Songs Selected</p> }
               
                 
               
            </section>
        )
    }
}


