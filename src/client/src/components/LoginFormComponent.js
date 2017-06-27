import React, {Component, PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';


class LoginForm extends Component {
  constructor() {
    super();
  }

  renderErrorAlert(error) {
    console.log('Heyyyyyyyyyy');
    return (
      <div className="alert alert-danger" role="alert">{error.message}</div>
    )
  }

  render() {
    const { handleSubmit, pristine, submitting, submitError} = this.props;

    return (
      <div className="container" >
        <form className="form-signin">
          <h2 className="form-signin-heading">Please sign in</h2>
          <label for="inputEmail" className="sr-only">Email address</label>
          <Field type="email" name="email" component="input" className="form-control" placeholder="Email address" required="true" autofocus="" />
          <label for="inputPassword" className="sr-only">Password</label>
          <Field type="password" name="password" component="input" className="form-control" placeholder="Password" required="true" />
          <div className="checkbox">
            <label>
              <input type="checkbox" value="remember-me"> Remember me </input>
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="button" disabled={pristine || submitting} onClick={handleSubmit}>Sign in</button>
        </form>
        {submitError ? this.renderErrorAlert(submitError) : null}
      </div>
    )
  }
}

export default reduxForm({
  form: 'login'
})(LoginForm);
