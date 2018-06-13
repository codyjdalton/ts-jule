/**
 * hello.module.spec
 */
const { expect } = require("chai");

const { HelloModule } = require('./hello.module');

describe('HelloModule', () => {

    let aModule;

    beforeEach(() => {
        aModule = new HelloModule();

        // override log method
        aModule.log = () => {
            // ..
        };

        // override prompt method
        aModule.prompt = () => {
            return new Promise(() => {});
        };
    });

    it('should be a module', () => {

        expect(aModule).to.not.be.undefined;
    });

    it('should start with a greeting', () => {

        const logs = [];

        aModule.log = (text) => {
            logs.push(text);
        };

        aModule.sayHello();

        expect(logs.length).to.equal(1);
    });

    it('should allow the user to input a response', () => {

        let inputType = null;

        aModule.prompt = (options) => {

            inputType = options[0].type;

            return new Promise(() => {});
        };

        aModule.sayHello();

        expect(inputType).to.equal('input');
    });

    it('should show the user input', (done) => {

        const logs = [];

        aModule.log = (text) => {
            logs.push(text);
        };

        aModule.prompt = () => {
            return new Promise((resolve) => {
                resolve({
                    response: 'someText'
                });
            });
        };

        aModule.sayHello();

        setTimeout(
            () => {
                expect(logs[1]).to.equal('You said: someText');
                done();
            },
            10
        );
    });
});
