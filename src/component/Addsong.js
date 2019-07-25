import React, { Component } from 'react'
import './../App.scss'
import Button from './Action/Button'




export default class home extends Component {
constructor(props){
    super(props);
    
        this.state={
            Songstitle:'',
            Title:'',
            Location:'',
            Tag:'', 
            Artist:'',
            Album:'',
            Duration:'',
            updatename:'',
            formdata:''
        }
     //  this.handleSubmit1 = this.handleSubmit1.bind(this);
}

       
handleChange=(e)=>{
    
   // const val=e.target.value;
    this.setState({
       [e.target.name]:e.target.value
           

    });
   
   // console.log(this.state.)
}

handlesubmit=(e)=>{
   
 console.log("sada",e);
    const form={
      
      // Songs:this.state.Songstitle,
       Artist: this.state.Artist,
       Album:this.state.Album,
       Location:this.state.Location,
       Tag:this.state.Tag,
       Duration:this.state.Duration
    }
   
    console.log("formdata ",form);
    this.clearScreen();
    e.preventDefault();
   
}
handlecancel=(e)=>{
    console.log("cancel",e)
    this.clearScreen();
}
 clearScreen=()=>{
    this.setState({
        Songstitle:'',
        Artist:'' ,   
        Location:'',
        Album:'',
        Duration:'',
        Tag:'' 
     });
 }
    render() {
        return (
            <div className="divAddsongs">
                 Songs Title:  
              <input type='Text' name='Songstitle' value={this.state.Songstitle} onChange={e=>this.handleChange(e)} /><br/>
              Artist:   
              <input type='Text' name='Artist' value={this.state.Artist} onChange={e=>this.handleChange(e)}></input><br/>
              Location :  
              <input type='Text'  name='Location' value={this.state.Location} onChange={e=>this.handleChange(e)} /><br/>
              Album:   
              <input type='Text' name='Album' value={this.state.Album} onChange={e=>this.handleChange(e)} ></input><br/>
              Duration:  
              <input type='Text'  name='Duration'  value={this.state.Duration} onChange={e=>this.handleChange(e)}/><br/>
              Tag :  
              <input type='Text' name='Tag' value={this.state.Tag} onChange={e=>this.handleChange(e)} ></input><br/>
            
             {/* <Button Addsongs={(e)=>this.handlesubmit(e)}></Button> */}
             <Button Title={"Add Song"} action={e=>this.handlesubmit(e)}></Button>
             <Button Title={"Cancel"} action={e=>this.handlecancel(e)}></Button>
            </div>
        )
    }
}
