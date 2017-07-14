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
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('hello', [
      state('void', style({opacity: 0})),
      state('false', style({opacity: 0})),
      state('true', style({opacity: 1})),
      transition('*=>true', [
        animate('2000ms ease-in-out')
      ])
    ])
  ]
})

export class BannerComponent implements OnInit {
  public showHello;

  ngOnInit() {
    this.showHello = 'false';
    this.showHello = 'true';
  }
}
