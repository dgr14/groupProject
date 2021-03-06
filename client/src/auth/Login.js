import React, { Component } from 'react';
import { withContext } from "../AppContext"
import Styles from "./Login.module.css"

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            errorMessage: ""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            username: "",
            password: "",
            errorMessage: ""
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push("/expenses/entry"))
            .catch(err => {
                // this.setState({errorMessage: err.response.data.message})
            })
    }
/*
        .then(() => this.clearInputs())
        .catch(err => {
            this.setState({errorMessage: err.data})
        })
}
*/
    render() {
        return (
            <div className={Styles.formWrapper}>
                <form onSubmit={this.handleSubmit}>
                    <h3 className={Styles.loginHeader}>Log In</h3>
                    <div className={Styles.inputLoginWrapper}>
                        <input
                            onChange={this.handleChange}
                            value={this.state.username}
                            name="username"
                            type="text"
                            placeholder="username"/>
                        <input
                            onChange={this.handleChange}
                            value={this.state.password}
                            name="password"
                            type="password"
                            placeholder="password"/>
                    </div>
                    <button className={Styles.loginButton} type="submit">Submit</button>
                </form>
                {
                    this.state.errorMessage &&
                    <p style={{color: "red"}}>{this.state.errorMessage}</p>
                }
                {/* Please click here to sign up and create your own account. */}
{/* Please click <a render={() => <Redirect to="<MainView />">here</a> to sign up and create your own account. */}
            </div>
        )
    }
}

export default withContext(LoginForm);
/*
<a render={() => <Redirect to="<MainView />">here</a>
*/