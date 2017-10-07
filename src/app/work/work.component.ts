import { Component, OnInit } from '@angular/core';
import { ng2Parallax } from '../../../node_modules/ang2-parallax/ng2parallax'
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatDialog } from '@angular/material';
import { Modal } from '../modal/modal.component';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  animations: [
    trigger('zoom', [
      state('false', style({transform: 'scale(0.9)', opacity: 0.8, filter: 'grayscale(0.8)'})),
      state('true', style({transform: 'scale(1.0)', opacity: 1, filter: 'grayscale(0)'})),
      transition('false => true', animate('250ms ease-in-out')),
      transition('true => false', animate('250ms ease-in-out'))
    ])
  ]
})

export class WorkComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  pop1() {
    let dialogRef = this.dialog.open(Modal);
    dialogRef.componentInstance.title = "Schlumberger Abingdon Technology Centre (AbTC)";
    dialogRef.componentInstance.htmlContent = `
    Software Engineering Intern<br>
    Apr 2017 - Sep 2017
    <br><br>
    Schlumberger <a href="http://www.slb.com/about/rd/technology/abtc.aspx" target="_blank">Abingdon Technology Center (AbTC)</a> develops software solutions that 
    enable oil and gas companies to make better decisions for reservoir development.
    <br><br>
    I was an intern in the Field Development Planning team that develops commercial software solutions with focus on UX and digital transformation 
    from desktop applications to cloud-based services. I worked on both the front end and back end, and encountered projects of different nature: experimental/demo, 
    early stage, mid stage, and late stage. 
    I also utilised the technology stack that includes Docker, Kubernetes, Microsoft Azure, Google Cloud (incl. Pub/Sub, Datastore), CouchDB, Grafana,
    Swagger (API), Node.js, Angular (TypeScript, HTML, CSS), Python, Go / Golang.
      `;
  }

  pop2() {
    let dialogRef = this.dialog.open(Modal);
    dialogRef.componentInstance.title = "TuringLab, London";
    dialogRef.componentInstance.htmlContent = `
    Lead Instructor<br>
    Oct 2015 - Dec 2016
    <br><br>
    Since my first year, I have been involved in tech education and outreach. In my second year, I joined 
    <a href="https://turinglab.co.uk/explorers-2/#explorers" target="_blank">TuringLab</a>, a spinoff comprising college alumni, students, and some former members of 
    Imperial’s CoderDojo that aims to provide effective coding lessons for children and teens.
    <br><br>
    I volunteered to teach children from underrepresented groups (e.g. girls) and underprivileged communities, and also taught paid lessons. I was then promoted as 
    Lead Instructor to lead other instructors when teaching Huddles, which are dedicated group coding lessons that allow children to learn through interesting projects.
    <br><br>
    I learnt to convey complex ideas in a simple manner effectively and also honed my leadership and soft skills.
      `;
  }

  pop3() {
    let dialogRef = this.dialog.open(Modal);
    dialogRef.componentInstance.title = "Bloomberg LP, London";
    dialogRef.componentInstance.htmlContent = `
    Trading Solutions Connectivity and Integration Intern<br>
      Jun - Sep 2014
<br><br>
<a href="https://data.bloomberglp.com/solutions/sites/3/2013/09/2069069-TSCI-Brochure1.pdf" target="_blank">Bloomberg Trading Solutions Connectivity and Integration (TSCI)</a> 
delivers open connectivity, technology products and integration services to create seamless workflows across different systems, minimize operational risk, 
lower total cost of ownership for clients and manage their overall enterprise needs. TSCI can connect and integrate any in-house or third-party application with Bloomberg Trading Solutions.
<br><br>
The main technical tool used by this team to design transforms is a proprietary Visual Programming Language (VPL) platform based on the functional programming language, F#. 
I did not have any foundation in functional programming back then, thus I had to adapt quickly in order to contribute effectively. I also had to familiarise myself with PDF syntax, XML, XSLT, XSD, 
and the Financial Information eXchange ( FIX ) Protocol. Of course, I had to use the Bloomberg Terminal as well.
<br><br>
Here, I will highlight two main projects I completed during my stint. I created an Automation Tool to generate Weekly Project Status Reports for clients, with the aim of improving the standardisation 
of reports and helping team members to save time so that we can focus on other critical issues. The project was presented by my manager in Bloomberg's annual summit in New York so that it can be 
considered to be further developed and used by TSCI teams based in the Americas and APAC as well.
<br><br>
As one of the team's efforts to contribute to areas beyond Trading Solutions, I was tasked to work on a project that aimed to provide integration with Bloomberg’s Fixed Income Trading (FIT) team. 
I created a transform to parse FIX message into XML with detailed handling of Repeated Groups based on whichever version of FIX specification that the user inputs. I also improved my soft skills through 
liaising and working with a different team. 
<br><br>
It has been some time after I left and this division has since evolved and expanded into <a href="https://www.bbhub.io/solutions/sites/8/2015/09/CIS_Overview_BCH_DIG.pdf" target="_blank">Connectivity and Integration Solutions (CIS)</a>. 
I am happy I still keep in touch with my former colleagues there.
      `;
  }

  pop4() {
    let dialogRef = this.dialog.open(Modal);
    dialogRef.componentInstance.title = "University Royal Naval Unit (URNU) London";
    dialogRef.componentInstance.htmlContent = `
    Officer Cadet (OCDT)<br>
    Oct 2013 - Jun 2014
    <br><br>
    <a href="http://www.royalnavy.mod.uk/news-and-latest-activity/operations/uk-home-waters/university-training" target="_blank">The University Royal Naval Unit (URNU)</a> is a Royal Navy training establishment 
    that aims to develop undergraduates who show the potential to become the leaders of tomorrow, through maritime experience and exposure to the values and ethos of the Royal Navy. 
    <br><br>
    I was very honoured to be one of around 20 new cadets selected in 2013 from universities in London. This was a unique experience that involved teamwork, naval understanding, discipline, 
    and the spirit to serve the community. Some of the things I remember about it are triangulation positioning in the middle of the sea using gyroscopes with the other cadets, marching on Remembrance Day 
    but my face did not appear in any of the photos because I would always be blocked due to my height (or lack of), and also being part of the pair of cadets who managed to fundraise the largest amount for the 
    Royal Navy and Royal Marines Charity during the British Military Tournament. Unfortunately, due to an unforeseen illness, I had to skip some drill sessions and opportunities to go to the sea, 
    and was not performing as well as I wanted to, and eventually I had to come to terms with the fact that I had to quit. Nevertheless, I am grateful for the valuable albeit short experience 
    (and also, of course, for the fact that I am now healthy again).
    <br><br>
    <div style="text-align: center">
    <img src="../assets/urnu_grouppic.jpg" alt="URNU Group Photo" style="max-height: 50%; max-width:50%">
    <br>
    Guess which one was me?
    </div>
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