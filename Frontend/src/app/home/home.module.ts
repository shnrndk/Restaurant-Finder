import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { SectionsModule } from '../sections/sections.module';

import { ViewAddsComponent } from './view-adds/view-adds.component';
@NgModule({
    imports: [
        NgbModule,
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        SectionsModule
    ],
    declarations: [ HomeComponent, ViewAddsComponent ],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
