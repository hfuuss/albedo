'use strict';
import * as vscode from "vscode";
import { ReminderView } from './reminderView';
import { Utility } from './utility';

export class Scheduler {
    public constructor(private context: vscode.ExtensionContext) {
    }
    public start() {
        const timer = Utility.getConfiguration().get<number>('reminderViewIntervalInMinutes') || 3600;
        console.log('timer',timer);
        setInterval(() => {
            ReminderView.show(this.context);
        }, 1000 * 60 * timer);
    }
}