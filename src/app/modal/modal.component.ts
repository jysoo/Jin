import { MatButton, MatDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'app-modal',
    template:
    `
    <h1 mat-dialog-title>
        <div [innerHtml]="title | safeHtml"></div>
    </h1>
    <mat-dialog-content>
        <div [innerHtml]="htmlContent | safeHtml"></div> 
    </mat-dialog-content>
    <div class="close">
        <br><br>
        <button mat-button mat-dialog-close>Close</button>
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
    mat-dialog-content {
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
    constructor(private dialogRef: MatDialogRef<Modal>){}
}
