import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { TaskPageComponent } from './task-page/task-page.component';

import { routing } from './router';
import { RestangularModule } from 'ngx-restangular';
import { SharedServiceService } from "./shared/shared-service.service";


export function RestangularConfigFactory (RestangularProvider: any) {
  RestangularProvider.setBaseUrl('http://localhost:8080/');
}


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AccountPageComponent,
    TaskPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    RestangularModule.forRoot(RestangularConfigFactory),
  ],
  providers: [SharedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
