import {ClinicInterface} from './clinic.interface';
import {TherapistInterface} from './therapist.interface';

export interface PatientInterface {
    id: number;
    name: string;

    addClinic(clinic: ClinicInterface) : void;
    addTherapist(therapist: TherapistInterface) : void;
}
