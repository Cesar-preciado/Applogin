import React from 'react'


class MensjAlert extends React.Component{

    render(){

        const { Nombre } =  this.props 
        const { Password } = this.props


        const { MsmWelcome } =  this.props 
        const { VisiWelcome } =  this.props 


        const { MensjAlert } =  this.props 
        const { Visibilidad } = this.props
        
        console.log(Visibilidad)

        return(
            <div className="MensjAlert">
                  <p>El nombre ingresado es : {Nombre}</p>
                  <p>Password : {Password}</p>

                  <p style={{display:Visibilidad}}>{MensjAlert}</p>
                  <p style={{display:VisiWelcome}}>{MsmWelcome}</p>

            </div>
        )
    }
}

export default MensjAlert;

