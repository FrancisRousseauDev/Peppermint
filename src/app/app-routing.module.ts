import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {ExploreComponent} from "./components/explore/explore.component";
import {DetailComponent} from "./components/detail/detail.component";
import {CreateComponent} from "./components/create/create.component";

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'explore',
    component: ExploreComponent
  },
  {
    path: 'detail/:name',
    component: DetailComponent
  },
  {
    path: 'create',
    component: CreateComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
