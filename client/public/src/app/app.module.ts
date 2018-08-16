import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewtruckComponent } from './newtruck/newtruck.component';
import { EdittruckComponent } from './edittruck/edittruck.component';
import { ReviewtruckComponent } from './reviewtruck/reviewtruck.component';
import { TruckComponent } from './truck/truck.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewtruckComponent,
    EdittruckComponent,
    ReviewtruckComponent,
    TruckComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
