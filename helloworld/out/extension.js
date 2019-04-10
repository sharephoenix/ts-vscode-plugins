"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "helloworld" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World!');
    });
    context.subscriptions.push(disposable);
    let fix = vscode.commands.registerCommand("extension.test", () => {
        vscode.window.showInformationMessage('this is my test');
    });
    context.subscriptions.push(fix);
    let WordCounter = require('./WordCounter');
    let counter = new WordCounter(vscode);
    //需要释放的资源都在这里依次push到这个数组里面
    //注意，这些非托管的资源，都含有dispose方法，自己封装的对象，如果有需要手动释放的资源，请也实现dispose方法吧
    // context.subscriptions.push(disposable);
    context.subscriptions.push(counter);
}
exports.activate = activate;
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map