import * as i0 from '@angular/core';
import { EventEmitter, Component, ViewEncapsulation, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class ButtonComponent {
    constructor() {
        this.label = 'Click';
        this.color = 'primary';
        this.clickEvent = new EventEmitter();
    }
    onClick() {
        this.clickEvent.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ButtonComponent, selector: "cus-button", inputs: { label: "label", color: "color" }, outputs: { clickEvent: "clickEvent" }, ngImport: i0, template: "<button\n  class=\"u-m-all-4\"\n  [ngClass]=\"[\n    color === 'primary' ? 'primary' : '',\n    color === 'secondary' ? 'secondary' : ''\n  ]\"\n  (click)=\"onClick()\"\n>\n  {{ label }}\n</button>\n", styles: ["button{transition:background-color .2s;font-weight:500;padding:8px;border-radius:10px}.primary{background-color:green;color:#fff}.secondary{background-color:#00f;color:#fff}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cus-button', standalone: false, encapsulation: ViewEncapsulation.None, template: "<button\n  class=\"u-m-all-4\"\n  [ngClass]=\"[\n    color === 'primary' ? 'primary' : '',\n    color === 'secondary' ? 'secondary' : ''\n  ]\"\n  (click)=\"onClick()\"\n>\n  {{ label }}\n</button>\n", styles: ["button{transition:background-color .2s;font-weight:500;padding:8px;border-radius:10px}.primary{background-color:green;color:#fff}.secondary{background-color:#00f;color:#fff}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], color: [{
                type: Input
            }], clickEvent: [{
                type: Output
            }] } });

class ButtonModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ButtonModule, declarations: [ButtonComponent], imports: [CommonModule], exports: [ButtonComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [ButtonComponent],
                    exports: [ButtonComponent]
                }]
        }] });

class UiKitModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: UiKitModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: UiKitModule, imports: [ButtonModule], exports: [ButtonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: UiKitModule, imports: [ButtonModule, ButtonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: UiKitModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [ButtonModule],
                    exports: [ButtonModule],
                }]
        }] });

/*
 * Public API Surface of ui-kit
 */
//MODULE UI KIT

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonModule, UiKitModule };
//# sourceMappingURL=mariobeltran06-ui-kit-16.mjs.map
