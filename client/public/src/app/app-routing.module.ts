import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewtruckComponent } from './newtruck/newtruck.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'new', component: NewtruckComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
