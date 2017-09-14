import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';

import { Clinic } from './../../../../models/clinic';
import { ApiClinicCrudService } from './../../../../services/api-clinic-crud.service';
import { ApiPatientCrudService } from './../../../../services/api-patient-crud.service';
import { ApiClinicCrudInterface } from './../../../../interfaces/services/api-clinic-crud.interface';
import { ApiPatientCrudInterface } from './../../../../interfaces/services/api-patient-crud.interface';
import { PatientFactory } from './../../../../factories/models/patient.factory';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'clinic-item',
    templateUrl: './clinic-item.component.html',
    styleUrls: ['./clinic-item.component.css']
})
export class ClinicItemComponent {
    @Input() clinic: Clinic;
    @Output() onDeleted = new EventEmitter<Clinic>();

    constructor(
      @Inject(ApiClinicCrudService) private clinicApi: ApiClinicCrudInterface,
      @Inject(ApiPatientCrudService) private patientApi: ApiPatientCrudInterface,
      @Inject(PatientFactory) private patientFactory: PatientFactory
    ) { }

    onDelete(): void {
        if (window.confirm('Are you sure?')) {
            this.clinicApi.remove(this.clinic)
                .subscribe(res => {
                    if (res === true) {
                        this.onDeleted.emit(this.clinic);
                    }
                });
        }
    }

    addPatient(): void {
      const patient = this.patientFactory.createPatient();
      patient.name = 'John';
      this.clinic.addPatient(patient);
      patient.addClinic(this.clinic);

      const requests: Observable<boolean>[] = [];
      requests.push(this.clinicApi.save(this.clinic));
      requests.push(this.patientApi.save(patient));

      Observable.forkJoin(requests).subscribe((response) => {});
    }
}
