import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroseComponent } from './herose/herose.component';
import { HeroService } from './hero.service';
import {AppRoutingModule } from './app-routing.module';
@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, HeroseComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ HeroService]
})
export class AppModule { }
