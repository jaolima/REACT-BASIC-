import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
    state = {
        newTech: '',
        techs: []
    };

    // executando assim que o componente aparece em tela
    componentDidMount() {
        const techs = localStorage.getItem('techs');

        if(techs) {
            this.setState({techs: JSON.parse(techs)});
        }
    }

    // Executado sempre que houver alterações nas props ou estado
    componentDidUpdate(_, prevState) {
        if (prevState.tech != this.state.techs){
            localStorage.setItem('Techs', JSON.stringify(this.state.techs))
        }
        // this.props, this.state
    }

    // Executado quando o componente deixa de existir
    componentWillUnmount(){

    }

    handleInputChange = e => {
        this.setState({ newTech: e.target.value })
    }

    handleSubmit = e => {
        //prevê o comportamento padrão,exemplo: ao clicar no botão "enviar" a tela atualiza, mas com o prevent default nao
        e.preventDefault();
        this.setState({
            techs: [... this.state.techs, this.state.newTech ],
            newTech: ''
        });
    }

    handlerDelete = (tech) => {
        this.setState({ techs: this.state.techs.filter(t => t != tech) })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>{this.state.newTech}</h1>
                <ul>
                    {this.state.techs.map(tech => (
                        <TechItem key={tech} tech={tech} onDelete={() => this.handlerDelete(tech)}/>
                    ))}
                </ul>
                <input
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.newTech} 
                />
                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default TechList;