import {expect} from 'chai'
import sinon from 'sinon'
import * as TestCandidate from '../src/Testcandidate'
import * as childModule from '../src/ChildModule'
 
describe("Calculator Tests", () => {
      it("should return 5 when 2 is added to 3", () => {
      let stub = sinon.stub(childModule,'childGo').returns(3)
      const result = TestCandidate.TestGo(2);
      expect(result).eq(3)
   });
});