import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './components/app/app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

import { ApiClinicCrudService } from './services/api-clinic-crud.service';
import { ApiPatientCrudService } from './services/api-patient-crud.service';
import { Utils } from './services/utils';
import { ClinicFactory } from './factories/models/clinic.factory';
import { PatientFactory } from './factories/models/patient.factory';
import { ConfirmDeactivateGuard } from './guards/confirm-deactivate.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    ApiClinicCrudService,
    ApiPatientCrudService,
    ClinicFactory,
    PatientFactory,
    Utils,
    ConfirmDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
