import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { TodosComponent } from './todos/todos.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'users',
    component:UserComponent
  },
  {
    path:'photos',
    component: PhotosComponent
  },
  {
    path:'todos',
    component:TodosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
