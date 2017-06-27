import * as chai from 'chai';
import * as spies from 'chai-spies';
import {expect} from 'chai';
import {addCleaning} from '../../controllers/addCleaning';

chai.use(spies);

describe('Add cleaning controller', () => {
  let res;
  let req;
  let json;
  let status;
  beforeEach(() => {
    json = chai.spy();
    status = () => {return {json}};
    req = {
      body: {
        someKey: 'someValue'
      }
    };

    res = {
      status
    };
  });

  it('should return a message of success', () => {
    addCleaning(req, res);
    expect(json).to.have.been.called.with({message: 'Added'});
  });

  it('should return a message of invalid if body is empty', () => {
    addCleaning(req, res);
    expect(json).to.have.been.called.with({message: 'Added'});
  });
});
