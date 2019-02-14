import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxGanntModule } from '../../projects/ngx-gannt/src/lib/ngx-gannt.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGanntModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
