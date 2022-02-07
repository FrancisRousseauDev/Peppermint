import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HotCollectionsComponent } from './components/hot-collections/hot-collections.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CarouselModule} from "ngx-owl-carousel-2";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomepageComponent,
    HotCollectionsComponent
  ],
  imports: [
    CarouselModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
