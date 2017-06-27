import * as chai from 'chai';
import * as spies from 'chai-spies';
import {expect} from 'chai';
import {cleaningHistory} from '../../controllers/cleaningHistory';

chai.use(spies);

describe('Cleaning history controller', () => {
  let res;
  let req;
  let json;
  let status;
  beforeEach(() => {
    json = chai.spy();
    status = () => {return {json}};
    req = {
      params: {id: 'someId'}
    };

    res = {
      status
    };
  });

  it('should return an array of cleaning history', () => {
    cleaningHistory(req, res);
    expect(json).to.have.been.called;
  });
});
