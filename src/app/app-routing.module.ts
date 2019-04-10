import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroseComponent }      from './herose/herose.component';
import {DashboardComponent } from './dashboard/dashboard.component';
const routes : Routes =[
   {path :'herose' , component: HeroseComponent} ,
   { path: 'dashboard', component: DashboardComponent },];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
 })
export class AppRoutingModule { 
  
}