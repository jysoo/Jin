import { Component, OnInit } from '@angular/core';
import { ng2Parallax } from '../../../node_modules/ang2-parallax/ng2parallax'
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MdDialog } from '@angular/material';
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

  constructor(private dialog: MdDialog) {}

  pop1() {
    let dialogRef = this.dialog.open(Modal);
    dialogRef.componentInstance.title = "Open Source Contribution to Distributed Systems (pending)";
    dialogRef.componentInstance.htmlContent = `
      Summer 2017
      <br><br>
      Learning in progress. I will try to make my first contribution soon, and then update you with more details here. 
      I have decided to dedicate a tile here for this project so that I can remind myself to persevere as well as to record my learnings and contributions.
      <br><br>
      Ceph is a distributed object, block, and file storage platform. The Reliable Autonomic Distributed Object Store (RADOS) 
      provides applications with object, block, and file system storage in a single unified storage cluster. Thus, it enables users to improve 
      IT infrastructure and manage a large amount of data effectively. 
      <br><br>
      Ceph is really cool and its <a href="https://ceph.com" target="_blank">website</a> provides great resources for us to learn more about it.
    `;
  }

  pop2() {
    let dialogRef = this.dialog.open(Modal);
    dialogRef.componentInstance.title = "Personal Website";
    dialogRef.componentInstance.htmlContent = `
    Summer 2017
    <br><br>
    <b>Welcome to Version 0 of my personal website!</b> To allow readers to follow along my story smoothly, I have decided to build a one-page site that relies predominantly on scrolling, minimising the need for clicking and navigating around. Users can click on the tiles in the Project and Work Experience sections to read the details, but they will appear as a modal pop-up dialog instead of redirecting you to a separate page and requiring you to navigate back to the main page again.
    <br><br>
    When the department wanted us to submit a personal portfolio as part of our industrial placement assessment, I decided to design and code my personal website from scratch using Angular, a TypeScript-based open-source front-end web application platform. The team that I am working with during my industrial placement uses Angular and also has a focus on user experience, so that sort of ties these things together nicely.
    <br><br>
    I experimented with applying parallax effect on the clouds, creating vector graphics, using animations in the Angular style instead of the regular CSS style, and also learnt more about the quirks of CSS. I deployed the website as a cloud app using <a href="https://azure.microsoft.com/en-gb/services/app-service/" target="_blank">Microsoft Azure App Service</a> with the free <a href="https://imagine.microsoft.com/" target="_blank">Microsoft Imagine</a> subscription (yay!) that they offer for students. I set up a <a href="https://www.visualstudio.com/learn/what-is-continuous-integration/" target="_blank"><b>Continuous Integration (CI) pipeline</b></a> such that pushing changes to GitHub will trigger the build process on VSTS and update the Azure App automatically.
    <br><br>
    I also tried to improve the accessibility and usability of the site in small ways. For instance, in the html and Angular templates, the images include an alt text to cater for visually impaired readers who use screen readers. Besides that, using contrasting colours is a recommended approach to improve the user experience of readers with colour blindness. So far, the site looks decent on mobile. In the long run, I intend to dive deeper into responsive design. 
    `;
  }

  pop3() {
    let dialogRef = this.dialog.open(Modal);
    dialogRef.componentInstance.title = "Embedded System Motor Controller";
    dialogRef.componentInstance.htmlContent = `
    Spring 2017
    <br><br>
    This coursework was completed as a group for the new Embedded Systems module offered in our department. It involves an understanding of the hardware of the motor as well as the implementation of the software using the ARM mbed platform.
    <br><br>
    The key concepts that are tested include real-time programming, multitasking, asynchronous tasks, and the use of threads and interrupts. We worked on the motor controller such that it can:
    <ul>
      <li>Spin for a defined number of rotations and stop without overshooting. </li>
    <li>Spin at a defined angular velocity, either continuously or as a maximum while carrying out the previous spec</li>
    <li>Operate at normal precision, which is the nearest one rotation for number of rotations, and the nearest one rotations per second for angular velocity </li>
    <li>Operate at high precision, which is the nearest 0.01 rotations for number of rotations, and the nearest 0.01 rotations per second for angular velocity.</li>
    <li>Play a melody while it is spinning by modulating the control voltage. It should repeat when it reaches the end of the input string that it interprets as musical notes. I used Pulse Width Modulation (PWM) for this task.</li>
    <li>Automatically tune its control parameters to optimise for a change in the connected moment of inertia.</li>
    </ul>
    The C++ code was submitted <a href="https://github.com/jysoo/embeddedsystem" target="_blank">here on Github</a>, and our team effort led to attaining an A for this coursework. 
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
    is taken away, both components will ring to alert the user.
    <br><br>
    The second-year project included several aspects such as research, testing and validation, report writing, surveys, and prototyping. 
    I was responsible for the Android App, which was a rewarding experience because it was my first time working with <b>Android</b>, <b>Java</b>, as well as <b>Bluetooth Low Energy</b>. 
    We helped one another with the phone app as well as the code for the ‘Sticker Tag’, and managed to attain A+ for the project.
    <br><br>
    I have put together a <a href="https://github.com/jysoo/PickpocketPrevention/blob/master/AppDescription.pdf" target="_blank">brief summary here</a> to highlight code snippets and provide technical 
    descriptions of how the Android App works.
    `;
  }

  pop5() {
    let dialogRef = this.dialog.open(Modal);
    dialogRef.componentInstance.title = "Financial Information eXchange (FIX) Message Parser";
    dialogRef.componentInstance.htmlContent = `
    Summer 2014<br><br>
    During my internship at Bloomberg, as an effort to integrate with Bloomberg’s Fixed Income Trading (FIT) team, I created a transform to parse FIX message into XML with detailed handling of Repeated Groups based on whichever version of FIX specification that the user inputs. The project was completed using a proprietary Visual Programming Language (VPL) platform based on the functional programming language, F#. For this project, I also had to familiarise myself with XML, XSD, and the Financial Information eXchange (FIX) Protocol. I also improved my soft skills through liaising and working with a different team.
    <br><br>
    To make the code robust, the tool takes in two inputs: a FIX message and a FIX Specification document. This ensures that the FIX message is parsed according to the particular version of FIX Specification that is adopted by the parties involved. The output file is an XML file that can be easily interpreted by humans as well as machines.
    <br><br>
    The highlight of this FIX message parser is that it provides detailed handling of Repeated Groups. There may be many instances of Repeated Groups in one tag. There may also be Repeated Groups nested within a Repeated Group. At the ‘root’ level, Repeated Groups will be indicated as instance 1, 2, 3 etc. Repeated Groups nested within, say, Repeated Group instance 1 will be indicated as instance 1:1, 1:2, 1:3, etc. And the indication of the nesting can go as deep as represented by the unparsed FIX message. 
    The sample output shows the part of the parsed message that corresponds to the green segment of the input FIX message shown.
    <br><br>
    <div style="text-align: center">
    Sample FIX Message (Input)<br>
    <img src="../assets/input_fix.png" alt="Input" style="max-height: 50%; max-width:50%">
    <br><br>
    Sample Snippet of Parsed FIX Message (Output)<br>
    <img src="../assets/parsed_fix_part1.png" alt="Output" style="max-height: 50%; max-width:50%">
    <img src="../assets/parsed_fix_part2.png" alt="Output" style="max-height: 50%; max-width:50%">
    </div>
    `;
  }

  pop6() {
    let dialogRef = this.dialog.open(Modal);
    dialogRef.componentInstance.title = "Automation Tool to Generate Weekly Project Status Reports for Clients";
    dialogRef.componentInstance.htmlContent = `
    Summer 2014<br><br>
    During my internship at Bloomberg, I created an Automation Tool to generate Weekly Project Status Reports for clients, with the aim of improving the standardisation of reports and helping team members to save time so that we can focus on other critical issues. The project was presented by my manager in Bloomberg's annual summit in New York so that it can be considered to be further developed and used by TSCI teams based in the Americas and APAC as well. 
    <br><br>
    This project was completed using a proprietary Visual Programming Language (VPL) platform based on the functional programming language, F#. It was my first time doing functional programming, thus it is both challenging and fun. I also had to familiarise myself with XML, XSD, and PDF syntax (which is the format of the generated report). 
    <br><br>
    Some key parts of the project are:
    <ul>
      <li>Dynamically creating and adjusting the sizes of the tables and their columns and rows according to the input data (which is obtained from the team’s project management tools)</li>
    <li>Logic to determine the appropriate places to insert a line break</li>
    <li>Logic for pagination</li>
    </ul>
    One key challenge that I encountered was rendering images (e.g. company logo, header, footer) using PDF syntax. This is because the VPL did not support inputting control characters (e.g. DC1, DC2, DC3, FS), yet these special characters were present in the image data. Unlike using textual programming languages, I could not import libraries into the VPL platform. I also had to ensure the user workflow was as simple as possible. After some experiments, I managed to discover a workaround: represent DCT decoded image (jpeg) in Hex, which is just normal characters that can be represented on the VPL, and then use a double filter in the underlying PDF syntax to render the images correctly.
    `;
  }

  public isZoomed1;
  public isZoomed2;
  public isZoomed3;
  public isZoomed4;
  public isZoomed5;
  public isZoomed6;

  ngOnInit() { 
    this.isZoomed1 = 'false';
    this.isZoomed2 = 'false';
    this.isZoomed3 = 'false';
    this.isZoomed4 = 'false';
    this.isZoomed5 = 'false';
    this.isZoomed6 = 'false';
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
  zoomIn5() {
    this.isZoomed5 = 'true';
  }
  zoomOut5() {
    this.isZoomed5 = 'false';
  }
  zoomIn6() {
    this.isZoomed6 = 'true';
  }
  zoomOut6() {
    this.isZoomed6 = 'false';
  }
}