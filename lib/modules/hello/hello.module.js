/**
 * hello.module
 */
const { prompt } = require('inquirer');

class HelloModule {

    constructor() {
        this.log = console.log;
        this.prompt = prompt;
    }

    sayHello() {
        const prompts = [
            {
                type: 'input',
                name: 'response',
                message: 'Your response'
            }
        ];
    
        this.log("Hello. Welcome to jule.");
        
        this.prompt(prompts)
            .then((answers) => {
                this.log('You said: ' + answers.response);
            });
    }
}

module.exports = {
    HelloModule
};