import React from 'react'
import Login from './Components/Login'
import Registro from './Components/Registro'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import FormUser from './Components/FormUser'
import MensjForm from './Components/MensjForm'

class App extends React.Component{

  constructor(props){
    super(props)
    
    this.state = {

      Nombre:'',
      Password:'',
      MensjAlert:'',
      MsmWelcome:'',
      Visibilidad:'',
      VisiWelcome:'none'

    }

    this.IniLogin = this.IniLogin.bind(this)
  }

  LoadDate = (e) =>{

    var name = e.target.name
    var value = e.target.value

    this.setState({[name]:value})
  }

  IniLogin = (e) =>{
    e.preventDefault();
    if( this.state.Nombre === "" || this.state.Password === ""){
      this.setState({MensjAlert:'Campos vacios', Visibilidad:'block',MsmWelcome:'',VisiWelcome:'none'})

    }else{
      this.setState({MensjAlert:'', Visibilidad:'none',MsmWelcome:'Welcome '+this.state.Nombre,VisiWelcome:'block' })
    }

  }

  render() {

  return (
    <div className="App">

    <Router>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/Registro">Registro</Link></li>
      </ul>
      <Route path="/" component={Login} />
      <Route path="/Registro" component={Registro} />
      <header className="App-header">
<FormUser LoadDate={this.LoadDate} IniLogin={this.IniLogin}></FormUser>
<MensjForm Nombre={this.state.Nombre} Password={this.state.Password} MensjAlert={this.state.MensjAlert} Visibilidad={this.state.Visibilidad} MsmWelcome={this.state.MsmWelcome} VisiWelcome={this.state.VisiWelcome}></MensjForm>     
</header>
    </Router>

    </div>
  );
    
}
}

export default App;
