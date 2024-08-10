import React, { Component } from 'react'
import alertify from "alertifyjs";

export default class Form1 extends Component {
    state =  {user:'', city:''}
    onChangeHandler =(event)=>{
        //this.setState({user:event.target.value})
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]:value})
    }

    onSubmitHandler = (event)=>{
        event.preventDefault();
        alertify.warning(this.state.user, 1.5);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h3>Username</h3>
                    <input name="user" onChange={this.onChangeHandler} type="text"></input>
                    <h3>Username is {this.state.user}</h3>

                    <h3>City</h3>
                    <input name="city" onChange={this.onChangeHandler} type="text"></input>
                    <h3>City is {this.state.city}</h3>

                    <input type="submit" value="Save"></input>
                </form>
            </div>
        )
    }
}

