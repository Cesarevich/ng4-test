import { Injectable } from '@angular/core';

import { Observable, Observer } from 'rxjs/Rx';
import { ApiClinicCrudInterface } from './../interfaces/services/api-clinic-crud.interface';
import { Clinic } from './../models/clinic';
import { ClinicRequestInterface } from './../interfaces/request/clinic.request.interface';
import { ClinicFactory } from './../factories/models/clinic.factory';
import { ClinicRequestInterface as ClinicRequest } from './../interfaces/request/clinic.request.interface';

@Injectable()
export class ApiClinicCrudService implements ApiClinicCrudInterface {
  protected readonly storageKey: string = 'clinics';

  constructor(private clinicFactory: ClinicFactory) { }

  create(parameters: ClinicRequest): Observable<Clinic> {
      return new Observable((observer: Observer<any>) => {
          const clinic = this.clinicFactory.createClinic();
          clinic.address = parameters.address;
          clinic.title = parameters.title;
          const clinics = JSON.parse(localStorage.getItem(this.storageKey));
          if (clinics === null) {
              localStorage.setItem(this.storageKey, JSON.stringify([clinic]));
          } else {
              clinics.push(clinic);
              localStorage.setItem(this.storageKey, JSON.stringify(clinics));
          }
          observer.next(clinic);
      });
  }

  // TODO: here is we may want to pass pagination parameters
  list(): Observable<Clinic[]> {
      return new Observable((observer: Observer<any>) => {
          const clinics = JSON.parse(localStorage.getItem(this.storageKey)) || [];
          const models = clinics.map((item: ClinicRequestInterface)  => {
              return this.clinicFactory.createClinic(item);
          });
          observer.next(models);
      });
  }

  remove(clinic: Clinic): Observable<boolean> {
      return new Observable((observer: Observer<any>) => {
          const clinics = JSON.parse(localStorage.getItem(this.storageKey));
          const filteredClinics = clinics.filter(function (item: Clinic) {
              return item.id !== clinic.id;
          });
          localStorage.setItem(this.storageKey, JSON.stringify(filteredClinics));
          observer.next(true);
      });
  }

  get(id: string): Observable<Clinic> {
      return new Observable((observer: Observer<any>) => {
          const clinics = JSON.parse(localStorage.getItem(this.storageKey));
          let clinic = null;
          // Use every to stop iterating as soon as we find item.
          clinics.every(function (item: Clinic) {
              if (item.id === id) {
                  clinic = item;
                  return false;
              }
              return true;
          });
          if (clinic === null) {
              observer.error({status: 404});
          }

          const model = this.clinicFactory.createClinic(clinic);
          observer.next(model);
      });
  }

  save(clinic: Clinic): Observable<boolean> {
      return new Observable((observer: Observer<any>) => {
          const clinics = JSON.parse(localStorage.getItem(this.storageKey));
          // Use every to stop iterating as soon as we find item.
          const filteredClinics = clinics.filter(function (item: Clinic) {
              return item.id !== clinic.id;
          });

          filteredClinics.push(clinic);
          localStorage.setItem(this.storageKey, JSON.stringify(filteredClinics));
          observer.next(true);
      });
  }
}
