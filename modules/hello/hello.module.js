/**
 * hello.module
 */
const { prompt } = require('inquirer');

class HelloModule {

    sayHello() {
        const prompts = [
            {
                type: 'input',
                name: 'response',
                message: 'Your response'
            }
        ];
    
        console.log("Hello. Welcome to jule.");
        
        prompt(prompts)
            .then((answers) => {
                console.log('You said: ' + answers.response);
            });
    }
}

module.exports = {
    HelloModule
};