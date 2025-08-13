import { UiKitConfig } from './config.interface';
import * as i0 from "@angular/core";
export declare class ConfigService {
    private config?;
    constructor(config?: UiKitConfig | undefined);
    logConfig(): void;
    get apiUrl(): string;
    get optionAPIGW(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfigService, [{ optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConfigService>;
}
