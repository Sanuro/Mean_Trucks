import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewtruckComponent } from './newtruck/newtruck.component';
import { EdittruckComponent } from './edittruck/edittruck.component';
import { ReviewtruckComponent } from './reviewtruck/reviewtruck.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'new', component: NewtruckComponent },
  { path: 'edit/:_id', component:EdittruckComponent},
  { path: 'review/:_id', component:ReviewtruckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
