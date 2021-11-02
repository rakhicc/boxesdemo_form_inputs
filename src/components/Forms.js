import React, { Component } from "react";

class Forms extends Component {
  state = {
    firstName: "",
    lastName: "",
    PhoneNumber: "",
    gender: "",
  };
  textHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <form>
          <h1>Input Form</h1>
          <p>First Name: </p>{" "}
          <input type="text" name="firstName" onChange={this.textHandler} />
          <p>Last Name: </p>
          <input type="text" name="lastName" onChange={this.textHandler} />
          <p>Phone Number: </p>
          <input type="text" name="PhoneNumber" onChange={this.textHandler} />
          <p>Gender: </p>
          <select name="gender" onChange={this.textHandler}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <p>First Name: {this.state.firstName}</p>
          <p>Last Name: {this.state.lastName}</p>
          <p>Phone Number: {this.state.PhoneNumber}</p>
          <p>Gender: {this.state.gender}</p>
        </form>
      </div>
    );
  }
}

export default Forms;
