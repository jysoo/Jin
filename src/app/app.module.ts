import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { MaterialModule } from '@angular/material';
import { NguiScrollableModule } from '@ngui/scrollable';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { ng2Parallax } from '../../node_modules/ang2-parallax/ng2parallax';
import { NavigationElementDirective } from './navigation-element.directive';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { WhyComponent } from './why/why.component';
import { WhatsupComponent } from './whatsup/whatsup.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkComponent } from './work/work.component';
import { AwardsComponent } from './awards/awards.component';
import { LinksComponent } from './links/links.component';

import { Modal } from './modal/modal.component';
import { SafeHtml } from './modal/safehtml.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AboutComponent,
    WhyComponent,
    WhatsupComponent,
    ProjectsComponent,
    WorkComponent,
    AwardsComponent,
    LinksComponent,
    ng2Parallax,
    Modal,
    SafeHtml,
    NavigationElementDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    BootstrapModalModule,
    MaterialModule,
    NguiScrollableModule,
    Ng2PageScrollModule.forRoot()
  ],
  entryComponents: [ Modal ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
