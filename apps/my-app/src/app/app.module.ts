import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './page-a/counter/counter.component';
import { MyLibModule } from '@scx/login';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule, AppRoutingModule, MyLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
