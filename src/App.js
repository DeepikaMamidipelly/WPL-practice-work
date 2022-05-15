import React, { Component } from "react";
import Tutors from "./Tutors";
import Appointments from "./appointments";
import Signup from "./mockin";
import SignUp from "./signup";
import EditUser from "./editUser";
import Login from "./Login";
import UserDetails from "./userDetails";

class App extends Component {
  state = {
    tutors: [],
    tutor: {},
  };

  componentDidMount() {
    fetch("tutors.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ tutors: data });
        this.setState({ tutor: this.state.tutors[0] });
        console.log(this.state.tutor);
      })
      .catch(console.log);
  }

  render() {
    return <Login />;
  }
}

export default App;
