import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './shared/main-header/main-header.component';
import { MainFooterComponent } from './shared/main-footer/main-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
