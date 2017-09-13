import { Clinic } from './clinic';
import { Patient } from './patient';
import { TherapistInterface } from '../interfaces/models/therapist.interface';
import { ClinicInterface } from '../interfaces/models/clinic.interface';
import { PatientInterface } from '../interfaces/models/patient.interface';

export class Therapist implements TherapistInterface {
    public id: string;
    public position: string;
    public clinics: ClinicInterface[];
    public patients: PatientInterface[];

    public addClinic(clinic: ClinicInterface) : void {
        if (this.clinics.indexOf(clinic) === -1) {
            this.clinics.push(clinic);
            clinic.addTherapist(this);
        }
    }

    public addPatient(patient: PatientInterface) : void {
        if (this.patients.indexOf(patient) === -1) {
            this.patients.push(patient);
            patient.addTherapist(this);
        }
    }
}
