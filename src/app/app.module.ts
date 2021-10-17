import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { BackgroundVidComponent } from './background-vid/background-vid.component';

@NgModule({
  declarations: [
    AppComponent,
    CountDownTimerComponent,
    BackgroundVidComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
