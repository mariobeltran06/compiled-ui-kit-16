import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';
import { Observable } from 'rxjs';
import { Pokemon } from '../public-api';
import * as i0 from "@angular/core";
export declare class ApiService {
    private http;
    private configS;
    private readonly apiBase;
    constructor(http: HttpClient, configS: ConfigService);
    getAllDataPokemon(): Observable<Pokemon>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApiService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ApiService>;
}
