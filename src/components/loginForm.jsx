import React, { Component } from "react";
import FormInput from "./common/formInput";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    // Use this to store/display error messages to the user
    errors: { username: "", password: "" }
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;

    if (account.username.trim() === "")
      errors.username = "Username is required";
    if (account.password.trim() === "")
      errors.password = "Password is required";

    return errors;
  };

  handleSubmit = event => {
    // Keep page from reloading
    event.preventDefault();
    // Check for errors before calling the server
    const errors = this.validate();
    // if errors object is truthy, then return, else return an empty object
    // this helps prevent null/undefined runtime errors
    this.setState({ errors: errors || {} });
    if (errors) return;

    // Send data to server and redirect
    console.log("Submitted");
  };

  // this function take an event as an argument. From this event,
  // we only need the currentTarget attribute
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <FormInput
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
