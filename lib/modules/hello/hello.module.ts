/**
 * hello.module
 */
import { prompt } from 'inquirer';

export class HelloModule {

    prompt: any = prompt;
    log: any = console.log;

    constructor() {
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