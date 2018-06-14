#!/usr/bin/env node
/**
 * commands
 */
const program = require('commander');

const { HelloModule } = require('./modules/hello/hello.module');

class Program {

    constructor() {
        this.program = program;
    }

    run() {
        return new Promise((resolve) => {
            
            this.program
                .command('hello')
                .alias('h')
                .action(() => new HelloModule().sayHello());

            this.program.parse(process.argv);

            resolve(this.program);
        });
    }
}

const prog = new Program().run();

module.exports = {
    prog,
    Program
};