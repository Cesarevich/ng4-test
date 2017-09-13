import { Injectable } from '@angular/core';

@Injectable()
export class Utils {
    uuid() : string {
        // took from here: https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
        const s4=()=> Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
    }
}