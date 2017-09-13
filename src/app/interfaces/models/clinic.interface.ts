import { PatientInterface } from './patient.interface';
import { TherapistInterface } from './therapist.interface';

export interface ClinicInterface {
    id: string;
    title: string;
    address: string;

    addPatient(patient: PatientInterface) : void;

    addTherapist(therapist: TherapistInterface) : void;
}
