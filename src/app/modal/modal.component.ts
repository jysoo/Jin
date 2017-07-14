import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'app-modal',
    template:
    `
    <h1 md-dialog-title>
        <div [innerHtml]="title | safeHtml"></div>
    </h1>
    <md-dialog-content>
        <div [innerHtml]="htmlContent | safeHtml"></div> 
    </md-dialog-content>
    <div class="close">
        <br><br>
        <button md-button md-dialog-close>Close</button>
    </div>
    `,
    styles: [
    `
    h1 {
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        font-size: 20px;
        color: #F08080;
    }
    md-dialog-content {
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
        font-size: 16px;
        color: #4682B4;
        text-align: justify;
    }
    .close {
        text-align: center;
    }
    `
    ]
})
export class Modal {
    title: string;
    htmlContent: string;
    constructor(private dialogRef: MdDialogRef<Modal>){}
}
