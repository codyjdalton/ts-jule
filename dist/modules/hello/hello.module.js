"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var HelloModule = (function () {
    function HelloModule() {
        this.prompt = inquirer_1.prompt;
        this.log = console.log;
    }
    HelloModule.prototype.sayHello = function () {
        var _this = this;
        var prompts = [
            {
                type: 'input',
                name: 'response',
                message: 'Your response'
            }
        ];
        this.log("Hello. Welcome to jule.");
        this.prompt(prompts)
            .then(function (answers) {
            _this.log('You said: ' + answers.response);
        });
    };
    return HelloModule;
}());
exports.HelloModule = HelloModule;
//# sourceMappingURL=hello.module.js.map