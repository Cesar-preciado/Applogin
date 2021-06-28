import React from 'react'

class FormUser extends React.Component {
      

     render(){

        const { LoadDate } = this.props
        const { IniLogin } = this.props

        return(
            <div className="Form-App">
                <form onSubmit={IniLogin}>
                    <input type="text" name="Nombre" placeholder="Nombre" onChange={LoadDate}></input>
                    <input type="password" name="Password" placeholder="Password" onChange={LoadDate}></input>
                    <input type="submit" title="Iniciar" value="Iniciar"></input>
                </form>
                
            </div>
        )
     }
}

export default FormUser;