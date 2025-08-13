import { NgModule } from '@angular/core';
import { ButtonModule } from './components/button/button.module';
import { UI_KIT_CONFIG } from './config/token-config';
import * as i0 from "@angular/core";
class UiKitModule {
    static forRoot(config) {
        return {
            ngModule: UiKitModule,
            providers: [
                { provide: UI_KIT_CONFIG, useValue: config }
            ]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: UiKitModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: UiKitModule, imports: [ButtonModule], exports: [ButtonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: UiKitModule, imports: [ButtonModule, ButtonModule] }); }
}
export { UiKitModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: UiKitModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [ButtonModule],
                    exports: [ButtonModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkta2l0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL3VpLWtpdC9zcmMvdWkta2l0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUV0RCxNQUlhLFdBQVc7SUFDdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFtQjtRQUNoQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2FBQzdDO1NBQ0YsQ0FBQztJQUNKLENBQUM7K0dBUlUsV0FBVztnSEFBWCxXQUFXLFlBSFosWUFBWSxhQUNaLFlBQVk7Z0hBRVgsV0FBVyxZQUhaLFlBQVksRUFDWixZQUFZOztTQUVYLFdBQVc7NEZBQVgsV0FBVztrQkFKdkIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlJztcbmltcG9ydCB7IFVpS2l0Q29uZmlnIH0gZnJvbSAnLi9jb25maWcvY29uZmlnLmludGVyZmFjZSc7XG5pbXBvcnQgeyBVSV9LSVRfQ09ORklHIH0gZnJvbSAnLi9jb25maWcvdG9rZW4tY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0J1dHRvbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtCdXR0b25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBVaUtpdE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogVWlLaXRDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFVpS2l0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBVaUtpdE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IFVJX0tJVF9DT05GSUcsIHVzZVZhbHVlOiBjb25maWcgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==