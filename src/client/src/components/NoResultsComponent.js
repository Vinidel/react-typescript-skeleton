import React, {Component} from 'react';

export default class NoResultsComponent extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
       <div className="warning">No results found</div>
      </div>
    )
  }
}