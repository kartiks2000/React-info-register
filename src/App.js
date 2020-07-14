import React,{ Component } from 'react';
import './App.css';
import Form from './Form/Form';
import Showinfo from './Showinfo/Showinfo'

class App extends Component {

state = {
  info : [],
  show : false 
}

excessdata = (obj) => {
  var ixx = 0;
  var z = [...this.state.info];
  z.map(i => {
    if(i.Email == obj.Email)
    {
      ixx=-1;
    }
  });
  if(ixx == -1)
  {
    alert("Email already registered with us...");
  }
  else{
    z.push(obj)
  this.setState({info : z});
  console.log(this.state.info);
  }
}

showdata = () => {
  this.setState({show : !this.state.show});
}

removebox = (id) => {
  //NOTE -: Email is used as a key to delete an element hence it wont accept a repeated email
  // console.log(id);
  var ix;
  var temp = [...this.state.info];
  // eslint-disable-next-line
  temp.map((i,index) => {
    // eslint-disable-next-line
    if(i.Email == id){
      ix = index;
    }
    // eslint-disable-next-line
  });
  // eslint-disable-next-line
  if(ix==0){
    temp.shift();
  }
  else{
    temp.splice(1,ix);
  }
  this.setState({info : temp});
}

  render(){
    return (
      <div className="App">
        <h1>FORM</h1>
        <Form senddata={(data) => this.excessdata(data)}></Form>
        <button className="Showbtn" onClick={this.showdata}>show data</button>
        {this.state.show? this.state.info.length > 0? this.state.info.map((i,idx) => {
          return <Showinfo fname={i.Firstname} sname={i.Secondname} ag={i.Age} em={i.Email} add={i.Address} ci={i.City} key={idx} myid={i.Email} clicked={(id) => this.removebox(id)}></Showinfo>
        }) :<h1>No data Yet...</h1> : null }
      </div>
      );
  }  
}

export default App;
