import React, { Component } from "react";

const UserContext = React.createContext();
//Provider, Consumer

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => action.payload !== user.id),
      };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    default:
      return state;
  }
};

export class UserProvider extends Component {
  state = {
    isVisible: true,
    users: [
      {
        id: "1",
        name: "Deniz Umut Dereli",
        dep: "CTO",
        maas: 5000,
      },
      {
        id: "2",
        name: "Tansu Camcı",
        dep: "HR",
        maas: 4000,
      },
      {
        id: "3",
        name: "Nizamettin Başıbüyük",
        dep: "Denyo",
        maas: 2000,
      },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;
