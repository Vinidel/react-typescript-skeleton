import * as chai from 'chai';
import * as spies from 'chai-spies';
import {expect} from 'chai';
import {healthCheck} from '../../controllers/healthCheck';

chai.use(spies);

describe('Health-check controller', () => {
  let res;
  let req;
  let json;
  let status;
  beforeEach(() => {
    json = chai.spy();
    status = () => {return {json}};
    req = {};
    res = {
      status
    };
  });

  it('should return an array of cleaning history', () => {
    healthCheck(req, res);
    expect(json).to.have.been.called;
  });
});
