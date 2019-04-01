#!/usr/bin/env node
/**
 * commands
 */

const program = require('commander');

import { HelloModule } from './modules/hello/hello.module';

export class Program {

    program: any = program;

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

export const prog = new Program().run();