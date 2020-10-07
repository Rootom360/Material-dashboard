import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { PostslistComponent } from './postslist/postslist.component';

const routes: Routes = [{
    path:'',
    component:DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    },
  {
    path: 'articles',
    component:DefaultComponent
  },
  {
  path: 'postsList',
  component:PostslistComponent
  },{
    path: 'posts',
    component: PostsComponent
  }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
