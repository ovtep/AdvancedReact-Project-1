import React from 'react';
import './UserAddForm.css';
class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            formErrors: {email: '', name: ''},
            emailValid: false,
            nameValid: false,
            isGoldClient: false
        };
    }

    updateName(event) {
        this.validateName(event.target.value)
        if(this.state.nameValid)
            this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.validateEmail(event.target.value)
        if(this.state.emailValid)
            this.setState({email: event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    validateEmail(mail){
        this.setState({emailValid: mail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)});
    }

    validateName(name){
        this.setState({nameValid: name!==''});
    }

    render() {
        const {name, email, isGoldClient} = this.state;

        return (
            <form
                className="user-add-form"
                onSubmit={(event) => this.props.submitAddForm(event, name, email, isGoldClient)}
            >
                <h2>Adauga utilizatori:</h2>
                <label htmlFor="name">Nume:</label>
                <input
                    type="text"
                    name="name"
                    onChange={(event) => this.updateName(event)}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    onChange={(event) => this.updateEmail(event)}
                />
                <label htmlFor="is-gold-client">Client GOLD</label>
                <input
                    type="checkbox"
                    name="is-gold-client"
                    value="true"
                    onChange={(event) => this.updateIsGoldClient(event)}
                />

                <input type="submit" value="Introdu utilizatorul" disabled ={!this.state.emailValid || !this.state.nameValid}/>
            </form>
        )
    }
}

export default UserAddForm;