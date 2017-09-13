import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';

import { Clinic} from './../../../../models/clinic';
import { ApiClinicCrudService } from './../../../../services/api-clinic-crud.service';
import { ApiClinicCrudInterface } from './../../../../interfaces/services/api-clinic-crud.interface';

@Component({
    selector: 'clinic-item',
    templateUrl: './clinic-item.component.html',
    styleUrls: ['./clinic-item.component.css']
})
export class ClinicItemComponent {

    @Input() clinic: Clinic;
    @Output() onDeleted = new EventEmitter<Clinic>();

    constructor(
        @Inject(ApiClinicCrudService) private clinicApi: ApiClinicCrudInterface
    ) {
    }

    onDelete() {
        if (window.confirm('Are you sure?')) {
            this.clinicApi.remove(this.clinic)
                .subscribe(res => {
                    if (res === true) {
                        this.onDeleted.emit(this.clinic);
                    }
                });
        }
    }
}
