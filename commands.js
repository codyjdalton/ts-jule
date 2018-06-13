#!/usr/bin/env node
/**
 * commands
 */
const program = require('commander');

const { HelloModule } = require('./lib/modules/hello/hello.module');

program
    .command('hello')
    .alias('h')
    .action(() => new HelloModule().sayHello());

program.parse(process.argv);