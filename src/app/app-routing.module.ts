import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroseComponent }      from './herose/herose.component';

const routes : Routes =[
   {path :'herose' , component: HeroseComponent} ];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
 })
export class AppRoutingModule { 
  
}