import React, { Component } from 'react'
// import Button from "./Button"

// import { isTemplateElement } from '@babel/types';

//import Songs from './SongsData';
export default class Song extends Component {
  constructor(props){
      super(props);
    this.state = {
        termsAccepted: false,
        itemchecked:{},
        itemselected:[]
    }
}

    // handleCheckBox = () =>{
    //     console.log("dsada");
    //     this.setState({ termsAccepted: !this.state.termsAccepted })

    // } 
    oncheckchange=(songslst,e)=> {
        console.log(e.target.checked)
        if(e.target.checked===true)
        {
           this.setState({ itemselected:this.state.itemselected.push(songslst)}) ;
          
           this.props.callbackfunct('check',this.state.itemselected);
        }
        else if(e.target.checked===false)
        {
           this.props.callbackfunct('uncheck',this.state.itemselected);
        }

    //     let itemchecked=this.state.itemchecked;
    //     itemchecked[id]=e.target;
    //     this.setState({itemchecked});
   
    // console.log("select  ",this.state.itemselected);
    }

    render() {
       
        
   

 const songslst=this.props.info;
  
  
        return (
        <article className="body">
           
            <h4><b>Song Title:</b>  {songslst.Songstitle}</h4>
            <p><b>Artist:</b> {songslst.Artist} <b> Album :</b> {songslst.Album}<br/>
            
            <b>Location  :</b>{songslst.Location} <b>Tag  :</b>{songslst.Tag} <b> Duration  :</b>{songslst.Duration}<br/></p>
            
           
            <input type="checkbox" onChange={(e)=>this.oncheckchange(songslst,e)}></input>
            {/* <Checkbox handleSelect={()=>selectsongs(id)}></Checkbox> */}

        </article>
        )
    }
}



        //     {/* <CheckBox value="chk" handleSelect={()=>selectsongs(id)} text="gsg"/> */}
        //     {/* <input type="checkbox" >pl cehck</input> */}
        //   {/* /  <Button handleSelect={()=>selectsongs(id)}></Button>    */}
        //      {/*  if we pass function selectsongs the  we are passing method, but we have to pass ref useing errow fun,so ()=> */}