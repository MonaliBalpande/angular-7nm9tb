import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroseComponent } from './herose/herose.component';
import { ServiceHeroService } from './service.service';
import { HeroService } from './hero.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeroseComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ServiceHeroService, HeroService]
})
export class AppModule { }
