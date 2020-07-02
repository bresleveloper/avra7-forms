import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { F1Component } from './forms/f1/f1.component';
import { F2Component } from './forms/f2/f2.component';


const routes: Routes = [
  { path:'formControl',      component:F1Component},
  { path:'formGroup',      component:F2Component},


  { path:'',          redirectTo:'/formControl',  pathMatch: 'full'},
  { path:'**',        redirectTo:'/formControl',  pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
