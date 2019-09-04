import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CursosModule } from './cursos/cursos.module';
import { LogService } from './Shared/log.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [
    LogService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
