import { Component, OnInit } from '@angular/core';
import { ng2Parallax } from '../../../node_modules/ang2-parallax/ng2parallax'
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatDialog } from '@angular/material';
import { Modal } from '../modal/modal.component'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('zoom', [
      state('false', style({transform: 'scale(0.9)', opacity: 0.8, filter: 'grayscale(0.8)'})),
      state('true', style({transform: 'scale(1.0)', opacity: 1, filter: 'grayscale(0)'})),
      transition('false => true', animate('250ms ease-in-out')),
      transition('true => false', animate('250ms ease-in-out'))
    ])
  ]
})

export class ProjectsComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  pop1() {
    let dialogRef = this.dialog.open(Modal);
    dialogRef.componentInstance.title = "Final Year Project in partnership with Microsoft: Tech Accessibility for the Visually Impaired (in progress)";
    dialogRef.componentInstance.htmlContent = `
      Oct 2017 - June 2018
      <br><br>
      Ideate, design, and implement solution for specific use cases to improve the user experience of the visually impaired 
      when using smartphones and PCs to consume data for learning and productivity. 
      Involve inexpensive tactile spatial navigation interface, voice feedback (directional audio à la 3D Soundscape, speech, non-speech sounds), 
      AI/machine learning, and GPU/cloud.
      <br><br>
      More details coming soon ...
    `;
  }

  pop2() {
    let dialogRef = this.dialog.open(Modal);
    dialogRef.componentInstance.title = "Personal Website";
    dialogRef.componentInstance.htmlContent = `
    Summer 2017
    <br><br>
    <b>Welcome to Version 0 of my personal website!</b> To allow readers to follow along my story smoothly, I have decided to build a one-page site that relies predominantly on scrolling, 
    minimising the need for clicking and navigating around. Users can click on the tiles in the Project and Work Experience sections to read the details, but they will appear 
    as a modal pop-up dialog instead of redirecting you to a separate page and requiring you to navigate back to the main page again.
    <br><br>
    When the department wanted us to submit a personal portfolio as part of our industrial placement assessment, I decided to design and code my personal website from scratch using Angular, 
    a TypeScript-based open-source front-end web application platform. The team that I was working with during my industrial placement uses Angular and also has a focus on user experience, 
    so that sort of ties these things together nicely.
    <br><br>
    I experimented with applying parallax effect on the clouds, creating vector graphics, using animations in the Angular style instead of the regular CSS or JavaScript style, 
    and also learnt more about the quirks of CSS. I deployed the website as a cloud app via <a href="https://azure.microsoft.com/en-gb/services/app-service/" target="_blank">Microsoft Azure App Service</a> 
    using the free <a href="https://imagine.microsoft.com/" target="_blank">Microsoft Imagine</a> subscription (yay!) for students. I set up a 
    <a href="https://www.visualstudio.com/learn/what-is-continuous-integration/" target="_blank"><b>Continuous Integration (CI) pipeline</b></a> such that pushing changes to GitHub will 
    trigger the build process on VSTS and update the Azure App automatically.
    <br><br>
    I also tried to improve the accessibility and usability of the site in small ways. For instance, in the html and Angular templates, the images include an alt text to cater for 
    visually impaired readers who use screen readers. Besides that, using contrasting colours is a recommended approach to improve the user experience of readers with colour blindness. 
    So far, the site looks decent on mobile. In the long run, I intend to dive deeper into responsive design. 
    `;
  }

  pop3() {
    let dialogRef = this.dialog.open(Modal);
    dialogRef.componentInstance.title = "Embedded Systems Motor Controller";
    dialogRef.componentInstance.htmlContent = `
    Spring 2017
    <br><br>
    This coursework was completed as a group for the new Embedded Systems module offered in our department. It involves an understanding of the hardware of the motor as well as the 
    implementation of the software using the ARM mbed platform.
    <br><br>
    The key concepts that are tested include real-time programming, multitasking, asynchronous tasks, and the use of threads and interrupts. We worked on the motor controller such that it can:
    <ul>
      <li>Spin for a defined number of rotations and stop without overshooting. </li>
    <li>Spin at a defined angular velocity, either continuously or as a maximum while carrying out the previous spec</li>
    <li>Operate at normal precision, which is the nearest one rotation for number of rotations, and the nearest one rotations per second for angular velocity </li>
    <li>Operate at high precision, which is the nearest 0.01 rotations for number of rotations, and the nearest 0.01 rotations per second for angular velocity.</li>
    <li>Play a melody while it is spinning by modulating the control voltage. It should repeat when it reaches the end of the input string that it interprets as musical notes. 
    I used Pulse Width Modulation (PWM) for this task.</li>
    <li>Automatically tune its control parameters to optimise for a change in the connected moment of inertia.</li>
    </ul>
    `;
  }

  pop4() {
    let dialogRef = this.dialog.open(Modal);
    dialogRef.componentInstance.title = "Stick-It Pickpocket Prevention Tool";
    dialogRef.componentInstance.htmlContent = `
    Autumn 2015 - Spring 2016
    <br><br>
    A friend encountered much inconvenience and frustration after being pickpocketed while travelling in Europe. 
    He did not even know when and where he was pickpocketed. 
    Thus, for our second-year group project, we decided to create a Pickpocket Prevention Tool called Stick-It.
    <br><br>
    Stick-It is comprised of a 'Sticker Tag' that is attached to a valuable item (e.g. wallet), and a phone app that monitors the distance 
    between the two components. For the prototype, we used Adafruit Flora, but a much smaller chip can be used. If either the wallet or the phone 
    is taken away, both components will ring to alert the user. One challenge was to eliminate false positives as the RSSI values, an attribute 
    that corresponds to power strength/distance, fluctuate and there are often outliers.
    <br><br>
    The second-year project included several aspects such as research, testing and validation, report writing, surveys, and prototyping. 
    I was responsible for the Android App, which was a rewarding experience because it was my first time working with <b>Android</b>, <b>Java</b>, as well as <b>Bluetooth Low Energy</b>. 
    Our team effort led to attaining A+ for the project.
    <br><br>
    `;
  }

  public isZoomed1;
  public isZoomed2;
  public isZoomed3;
  public isZoomed4;

  ngOnInit() { 
    this.isZoomed1 = 'false';
    this.isZoomed2 = 'false';
    this.isZoomed3 = 'false';
    this.isZoomed4 = 'false';
  }

  zoomIn1() {
    this.isZoomed1 = 'true';
  }
  zoomOut1() {
    this.isZoomed1 = 'false';
  }
  zoomIn2() {
    this.isZoomed2 = 'true';
  }
  zoomOut2() {
    this.isZoomed2 = 'false';
  }
  zoomIn3() {
    this.isZoomed3 = 'true';
  }
  zoomOut3() {
    this.isZoomed3 = 'false';
  }
  zoomIn4() {
    this.isZoomed4 = 'true';
  }
  zoomOut4() {
    this.isZoomed4 = 'false';
  }
}