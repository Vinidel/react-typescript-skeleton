import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginForm from './LoginFormComponent';
import {doLogin} from '../actionCreators'

const LoginComponent = (props) => {

  const {loginValues, doLogin, error} = props;
  const submit = () => {
    const {values} = loginValues;
    const login = {
      email: values.email,
      password: values.password
    };
    doLogin({login});
  };

  return (
    <LoginForm handleSubmit={submit} submitError={error} />
  );
};

const mapDispatchToProps = {
  doLogin,
};

const mapStateToProps = (state) =>  {
  return {
    loginValues: state.form.login,
    error: state.login.error
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);