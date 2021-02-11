import React from 'react';
import Hobbies from './Hobbies';

class Person extends React.Component {
  
  state = {
    name: 'Roger2',
    company: 'Atmira',
    hobbies: ['Futbol', 'Ciclismo', 'Desarrollo Software']
  }

  componentDidMount = () => {
    console.log('Componente Person renderizado');
  }

  componentDidUpdate = () => {
    console.log('Componente Person actualizado');
  }

  handleCompany = () => this.setState({company: 'Everis'})
  handleHobbies = () => this.setState({hobbies: ['Basquet', 'Natación', 'Testing']})

  render() {
    return (
      <div className="Person">
        <h1>{this.state.name}</h1>
        <p>Empresa: {this.state.company}</p>
        <button onClick={this.handleCompany}>Cambio de empresa</button>
        <button onClick={this.handleHobbies}>Cambio de hobbies</button>
        <Hobbies hobbies={this.state.hobbies}/>
      </div>
    )
  }  
}

export default Person;