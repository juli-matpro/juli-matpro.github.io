import Well from "../src/js/models/Well";
import { expect } from 'chai';

describe ('Well', () => {
    let well;
    beforeEach(() => {
        well = new Well( 'Test Well', 7.13, 0.62, 88.26, 19.00, 0, 0, 0, 4, 6, 0, 1, 0, 0, 0, 4,5,3,54,[{'value': 28500},{'value': 30000},{'value': 45000},{'value': 46500},{'value': 42000},{'value': 46350},{'value': 56100},{'value': 56100},{'value': 56100},{'value': 56100},{'value': 56100},{'value': 56100}]);
    });

    it('should construct well', () => {
        expect(well.feas).to.equal(7.13);
        well.totalRev;
    });

});
