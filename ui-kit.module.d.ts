import { ModuleWithProviders } from '@angular/core';
import { UiKitConfig } from './config/config.interface';
import * as i0 from "@angular/core";
import * as i1 from "./components/button/button.module";
export declare class UiKitModule {
    static forRoot(config: UiKitConfig): ModuleWithProviders<UiKitModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UiKitModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<UiKitModule, never, [typeof i1.ButtonModule], [typeof i1.ButtonModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<UiKitModule>;
}
