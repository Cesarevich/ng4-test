import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'clinics',
    loadChildren: './modules/clinic/clinic.module#ClinicModule'
  },
  {
    path: 'patients',
    loadChildren: './modules/patient/patient.module#PatientModule'
  },
  {
    path: 'therapists',
    loadChildren: './modules/therapist/therapist.module#TherapistModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
