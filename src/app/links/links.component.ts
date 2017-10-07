import { Component, OnInit } from '@angular/core';
import { ng2Parallax } from '../../../node_modules/ang2-parallax/ng2parallax'
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {DomSanitizer} from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  providers: [MatIconRegistry],
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})

export class LinksComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'cv',
        sanitizer.bypassSecurityTrustResourceUrl('assets/cv.svg'));
    iconRegistry.addSvgIcon(
        'email',
        sanitizer.bypassSecurityTrustResourceUrl('assets/email.svg'));
    iconRegistry.addSvgIcon(
        'github',
        sanitizer.bypassSecurityTrustResourceUrl('assets/github-logo.svg'));
    iconRegistry.addSvgIcon(
        'linkedin',
        sanitizer.bypassSecurityTrustResourceUrl('assets/linkedin-logo.svg'));
  }

  ngOnInit() {
    
  }
}