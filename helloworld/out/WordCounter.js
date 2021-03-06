"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WordCounter {
    constructor(_vscode) {
        this.vscode = _vscode;
        this.init();
    }
    init() {
        let vscode = this.vscode;
        let StatusBarAlignment = vscode.StatusBarAlignment;
        let window = this.vscode.window;
        //statusBar，是需要手动释放的
        this.statusBar = window.createStatusBarItem(StatusBarAlignment.Left);
        //跟注册事件相配合的数组，事件的注册，也是需要释放的
        let disposable = [];
        //事件在注册的时候，会自动填充一个回调的dispose到数组
        window.onDidChangeTextEditorSelection(this.updateText, this, disposable);
        //保存需要释放的资源
        this.disposable = vscode.Disposable.from(disposable);
        this.updateText();
        this.statusBar.show();
    }
    updateText() {
        let window = this.vscode.window;
        this.editor = window.activeTextEditor;
        let content = this.editor.document.getText();
        let len = content.replace(/[\r\n\s]+/g, '').length;
        this.statusBar.text = `啦啦啦...已经敲了${len}个字符了`;
    }
    dispose() {
        this.disposable.dispose();
        this.statusBar.dispose();
    }
}
module.exports = WordCounter;
//# sourceMappingURL=WordCounter.js.map