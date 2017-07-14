import { Component, OnInit } from '@angular/core';
import { ng2Parallax } from '../../../node_modules/ang2-parallax/ng2parallax'
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  
  ngOnInit() {  
  }
}