import 'mocha';

import * as chai from 'chai';

import { hello } from '../src/hello-world';

const should = chai.should();

describe('Hello function', () => {

    it('should return hello world', () => {
        const result = hello();
        result.should.equal('Hello world!');
    });

});
