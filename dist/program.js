#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var program = require('commander');
var hello_module_1 = require("./modules/hello/hello.module");
var Program = (function () {
    function Program() {
        this.program = program;
    }
    Program.prototype.run = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.program
                .command('hello')
                .alias('h')
                .action(function () { return new hello_module_1.HelloModule().sayHello(); });
            _this.program.parse(process.argv);
            resolve(_this.program);
        });
    };
    return Program;
}());
exports.Program = Program;
exports.prog = new Program().run();
//# sourceMappingURL=program.js.map