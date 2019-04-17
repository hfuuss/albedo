'use strict';
import * as vscode from 'vscode';
import { Utility } from './utility';

export class ReminderView {
    private static panel: vscode.WebviewPanel | undefined;

    public static show(context: vscode.ExtensionContext) {
        if (this.panel) {
            this.panel.reveal();
        } else {
            this.panel = vscode.window.createWebviewPanel("albedo", "雅儿贝德大主管", vscode.ViewColumn.Two, {
                enableScripts: true,
                retainContextWhenHidden: true,
            });
            // const imagePath = vscode.Uri.file(path.join(context.extensionPath, 'images', 'ycy0.png'))
            //     .with({ scheme: 'vscode-resource' });
            const imagePath = Utility.getConfiguration().get<string>('reminderViewImg');
            this.panel.webview.html = `<!DOCTYPE html>
                                      <html lang="en">
                                      <head>
                                          <meta charset="UTF-8">
                                          <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                          <title>雅儿贝德</title>
                                      </head>
                                      <body>
                                          <div><h1>小哥哥~ 代码写久了，该休息啦~</h1></div>
                                          <div><img src="${imagePath}"></div>
                                      </body>
                                      </html>`;

            this.panel.onDidDispose(() => {
                this.panel = undefined;
            });
        }
    }
}