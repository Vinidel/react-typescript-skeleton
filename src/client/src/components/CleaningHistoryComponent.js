import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import map from 'lodash/map';
import Loader from 'halogen/ClipLoader';
import {cleaningHistory} from '../actionCreators'
import NoResultsComponent from './NoResultsComponent'

export class CleaningHistoryComponent extends Component {
  constructor() {
    super();
   }

  componentWillMount() {
    this.props.cleaningHistory();
  }

  renderStatus (status) {
    if (status === 'cleaned') {
      return (<span className="label label-primary">{status}</span>)
    } else {
      return (<span className="label label-error">{status}</span>)
    }
  }

  renderCleaningHistory() {
    const {history} = this.props;
    const list = map(history, (cleaning, index) => (
      <tr key={index}>
        <td>{cleaning.person.name}</td>
        <td>{moment(cleaning.date).format('DD-MM-YYYY')}</td>
        <td> {this.renderStatus(cleaning.status)}</td>
      </tr>
    ));

    if(list.length) {
      return (
        <table className="cleaningHistory">
          <thead>
          <tr>
            <th>Person</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody>
          {list}
          </tbody>
        </table>
      );
    } else {
      return (<NoResultsComponent />);
    }

  }

  renderSpinner() {
    return (
      <div className="spinner">
        <Loader color="#2f5a80" size="40px" margin="4px"/>
      </div>)
  }

  render() {
    return (
      <div className="content">
        <div>
          <div className="button-container">
            <div className="btn-group">
           <span className="action-button">
            <button type="button" className="btn btn-primary btn-lg">Cleaned</button>
           </span>
              <span className="action-button">
            <button type="button" className="btn btn-danger btn-lg" >Not cleaned</button>
           </span>
            </div>
          </div>
          {this.props.fetching? this.renderSpinner() :this.renderCleaningHistory()}
        </div>
      </div>
    )
  }
}

CleaningHistoryComponent.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object),
  fetched: PropTypes.bool,
  fetching: PropTypes.bool
};


const mapStateToProps = (state) => {
  return {
    history: state.cleaningHistory.history,
    fetched: state.cleaningHistory.fetched,
    fetching: state.cleaningHistory.fetching
  };
};

const mapDispatchToProps = {
  cleaningHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(CleaningHistoryComponent);