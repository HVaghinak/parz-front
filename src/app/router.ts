/**
 * Created by stdev on 4/11/17.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** componnets */

import { AccountPageComponent } from './account-page/account-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TaskPageComponent } from './task-page/task-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'account',
    component: AccountPageComponent
  },
  {
    path: 'tasks',
    component: TaskPageComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
