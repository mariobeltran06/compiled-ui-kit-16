import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ButtonComponent {
    label: string;
    color: 'primary' | 'secondary';
    clickEvent: EventEmitter<void>;
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "cus-button", never, { "label": { "alias": "label"; "required": false; }; "color": { "alias": "color"; "required": false; }; }, { "clickEvent": "clickEvent"; }, never, never, false, never>;
}
