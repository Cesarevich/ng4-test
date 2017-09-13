import { ClinicInterface } from './clinic.interface';
import { PatientInterface } from './patient.interface';

export interface TherapistInterface {
    id: string;
    position: string;

    addClinic(clinic: ClinicInterface) : void;

    addPatient(patient: PatientInterface) : void;
}
