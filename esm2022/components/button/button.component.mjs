import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
export { ButtonComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWtpdC9zcmMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWtpdC9zcmMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUVsRyxNQU9hLGVBQWU7SUFQNUI7UUFRVyxVQUFLLEdBQVcsT0FBTyxDQUFDO1FBQ3hCLFVBQUssR0FBNEIsU0FBUyxDQUFDO1FBQzFDLGVBQVUsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztLQUlyRTtJQUhDLE9BQU87UUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3hCLENBQUM7K0dBTlUsZUFBZTttR0FBZixlQUFlLHFJQ1Q1Qix5TUFVQTs7U0REYSxlQUFlOzRGQUFmLGVBQWU7a0JBUDNCLFNBQVM7K0JBQ0UsWUFBWSxjQUdWLEtBQUssaUJBQ0YsaUJBQWlCLENBQUMsSUFBSTs4QkFHNUIsS0FBSztzQkFBYixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDSSxVQUFVO3NCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3VzLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICdDbGljayc7XG4gIEBJbnB1dCgpIGNvbG9yOiAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyA9ICdwcmltYXJ5JztcbiAgQE91dHB1dCgpIGNsaWNrRXZlbnQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgb25DbGljaygpIHtcbiAgICB0aGlzLmNsaWNrRXZlbnQuZW1pdCgpXG4gIH1cbn1cbiIsIjxidXR0b25cbiAgY2xhc3M9XCJ1LW0tYWxsLTRcIlxuICBbbmdDbGFzc109XCJbXG4gICAgY29sb3IgPT09ICdwcmltYXJ5JyA/ICdwcmltYXJ5JyA6ICcnLFxuICAgIGNvbG9yID09PSAnc2Vjb25kYXJ5JyA/ICdzZWNvbmRhcnknIDogJydcbiAgXVwiXG4gIChjbGljayk9XCJvbkNsaWNrKClcIlxuPlxuICB7eyBsYWJlbCB9fVxuPC9idXR0b24+XG4iXX0=