import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {logout} from '../actionCreators'

export class HeaderComponent extends Component {
  constructor() {
    super();
  }


  render() {
    const {user, logout} = this.props;
    return (
      <header className="header">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Scheduler</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Cleaning</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="header-user-options" > <span className="glyphicon glyphicon-user" /> {user.firstName}</li>
              <li className="header-user-options" onClick={logout}><span className="glyphicon glyphicon-off" /> Logout</li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}


HeaderComponent.propTypes = {
  user: PropTypes.object,
  fetched: PropTypes.bool,
  fetching: PropTypes.bool,
};


const mapStateToProps = (state) => {
  return {
    user: state.login.user,
    fetched: state.user.fetched,
    fetching: state.user.fetching,
    session: state.login.session
  };
};

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);