import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HotCollectionsComponent } from './components/hot-collections/hot-collections.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CarouselModule} from "ngx-owl-carousel-2";
import { NewItemsComponent } from './components/new-items/new-items.component';
import { BrowseComponent } from './components/browse/browse.component';
import { FootComponent } from './components/foot/foot.component';
import {MatIconModule} from "@angular/material/icon";
import { ExploreComponent } from './components/explore/explore.component';
import {MatMenuModule} from "@angular/material/menu";
import { DetailComponent } from './components/detail/detail.component';
import { CreateComponent } from './components/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomepageComponent,
    HotCollectionsComponent,
    NewItemsComponent,
    BrowseComponent,
    FootComponent,
    ExploreComponent,
    DetailComponent,
    CreateComponent
  ],
  imports: [
    CarouselModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
