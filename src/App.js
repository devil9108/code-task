import React, { Component } from "react";
import "./App.css";
import loginDetails from "./loginDetails.json";
import dashBoardData from "./dashBoardData.json";
import UserData from "./UserData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isAuthenticated: false,
      isWrongCredentials: false
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (
      this.state.email === loginDetails.username &&
      this.state.password === loginDetails.password
    ) {
      console.log("hi");
      this.setState({
        ...this.state,
        isAuthenticated: true
      });
    } else {
      console.log("bye");
      this.setState({
        ...this.state,
        isWrongCredentials: true
      });
    }
  };
  render() {
    return this.state.isAuthenticated ? (
      <div className="container">
        <div className="row">
          {dashBoardData.map(userData => (
            <UserData data={userData} key={userData.id} />
          ))}
        </div>
      </div>
    ) : (
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <div className="card mx-auto border-dark w-50">
              <h5 className="card-header">Log In</h5>
              <div className="card-body">
                <form noValidate onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                    <br />
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                    <br />
                    {this.state.isWrongCredentials ? (
                      <p style={{ color: "red" }}>Wrong Credentials</p>
                    ) : (
                      ""
                    )}
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
