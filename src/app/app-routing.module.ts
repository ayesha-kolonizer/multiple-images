import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  { path: '', redirectTo: '/images', pathMatch: "full" },
  {path:'images', component:ImagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
