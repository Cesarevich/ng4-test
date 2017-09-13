import { Patient } from './patient';
import { Therapist } from './therapist';
import { ClinicInterface } from './../interfaces/models/clinic.interface';
import { PatientInterface } from '../interfaces/models/patient.interface';
import { TherapistInterface } from '../interfaces/models/therapist.interface';

export class Clinic implements ClinicInterface {
    public id: string;
    public title: string = null;
    public address: string = null;
    public patients: PatientInterface[];
    public therapists: TherapistInterface[];

    public addPatient(patient: PatientInterface) : void {
        if (this.patients.indexOf(patient) === -1) {
            this.patients.push(patient);
            patient.addClinic(this);
        }
    }

    public addTherapist(therapist: TherapistInterface) : void {
        if (this.therapists.indexOf(therapist) === -1) {
            this.therapists.push(therapist);
            therapist.addClinic(this);
        }
    }
}
