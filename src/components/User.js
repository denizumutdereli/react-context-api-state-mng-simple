import React, { Component } from "react";
import PropTypes from "prop-types";
import UserConsumer from "../context";

class User extends Component {
  state = {
    isVisible: false,
  };

  static defaultProps = {
    name: "İsim yok",
    dep: "Dep yok",
    maas: "Maaş yok",
  };

  onClickEvent = (number, e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  onDeleteUser = (dispatch, e) => {
    const { id } = this.props;
    //Consumer Dispatch
    dispatch({ type: "DELETE_USER", payload: id });
  };

  render() {
    //Destructing
    const { name, dep, maas } = this.props;

    const { isVisible } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className="col-md-8 mb-4">
              <div className="card" style={ isVisible ? {backgroundColor: '#ccc'} : null}>
                <div className="card-header d-flex justify-content-between">
                  <h4 className="d-inline" onClick={this.onClickEvent}>
                    {name}
                  </h4>
                  <i
                    onClick={this.onDeleteUser.bind(this, dispatch)}
                    className="far fa-trash-alt"
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>

                {isVisible ? (
                  <div className="card-body">
                    <p className="card-text">Maaş: {dep}</p>
                    <p className="card-text">Maaş: {maas}</p>

                    <p>{this.state.test}</p>
                  </div>
                ) : null}
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
User.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default User;
