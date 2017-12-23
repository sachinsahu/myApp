import { ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../../modules/login/login.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { EmployeeDashboardComponent } from '../../modules/dashboard/employee-dashboard/employee-dashboard.component';
import { ManagerDashboardComponent } from '../../modules/dashboard/manager-dashboard/manager-dashboard.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'employee',
        component: EmployeeDashboardComponent
      },
      {
        path: 'manager',
        component: ManagerDashboardComponent
      }
    ]
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {});