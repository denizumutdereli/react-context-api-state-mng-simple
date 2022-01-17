import React, { Component } from "react";
import posed from "react-pose";
import UserConsumer from "../context";
let uniqid = require("uniqid");

const Animation = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: "block",
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none",
    },
  },
});

class AddUser extends Component {
  state = {
    isVisible: false,
    name: "",
    dep: "",
    maas: "",
  };

  changeVisibility = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  AddUser = (dispatch, e) => {
    e.preventDefault();
    const { name, dep, maas } = this.state;

    const newUser = {
      id: uniqid(),
      name,
      dep,
      maas,
    };

    dispatch({ type: "ADD_USER", payload: newUser });

    console.log(newUser);
  };

  render() {
    const { isVisible, name, dep, maas } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className="col-md-8 mb-4">
              <button
                onClick={this.changeVisibility}
                className="btn btn-dark btn-block mb-2"
              >
                {isVisible ? "Hide" : "Show"} Form
              </button>
              <Animation pose={isVisible ? "visible" : "hidden"}>
                <div className="card">
                  <div className="card-header">
                    <h4>Add User</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.AddUser.bind(this, dispatch)}>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Enter Name"
                          className="form-control"
                          value={name}
                          onChange={this.changeInput}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="dep">Department</label>
                        <input
                          type="text"
                          id="dep"
                          name="dep"
                          placeholder="Enter Department"
                          className="form-control"
                          value={dep}
                          onChange={this.changeInput}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="maas">Maaş</label>
                        <input
                          type="text"
                          id="maas"
                          name="maas"
                          placeholder="Enter Name"
                          className="form-control"
                          value={maas}
                          onChange={this.changeInput}
                        />
                      </div>
                      <hr></hr>
                      <button
                        type="submit"
                        className="btn btn-danger btn-block"
                      >
                        Ekle
                      </button>
                    </form>
                  </div>
                </div>
              </Animation>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default AddUser;
