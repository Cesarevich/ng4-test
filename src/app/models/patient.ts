import { Clinic } from './clinic';
import { Therapist } from './therapist';
import { PatientInterface } from '../interfaces/models/patient.interface';
import { ClinicInterface } from '../interfaces/models/clinic.interface';
import { TherapistInterface } from '../interfaces/models/therapist.interface';

export class Patient implements PatientInterface {
    public id: number;
    public name: string;
    public clinics: ClinicInterface[];
    public therapists: TherapistInterface[];

    public addClinic(clinic: ClinicInterface) : void {
        if (this.clinics.indexOf(clinic) === -1) {
            this.clinics.push(clinic);
            clinic.addPatient(this);
        }
    }

    public addTherapist(therapist: TherapistInterface) : void {
        if (this.therapists.indexOf(therapist) === -1) {
            this.therapists.push(therapist);
            therapist.addPatient(this);
        }
    }
}
