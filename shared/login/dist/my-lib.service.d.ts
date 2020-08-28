import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class Customer {
    id: string;
    name: string;
}
export declare class MyLibService {
    load(): Observable<Customer[]>;
    static ɵfac: i0.ɵɵFactoryDef<MyLibService, never>;
    static ɵprov: i0.ɵɵInjectableDef<MyLibService>;
}
