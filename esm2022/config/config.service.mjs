import { Inject, Injectable, Optional } from '@angular/core';
import { UI_KIT_CONFIG } from './token-config';
import * as i0 from "@angular/core";
class ConfigService {
    constructor(config) {
        this.config = config;
    }
    logConfig() {
        console.log('Config de la librería:', this.config);
    }
    get apiUrl() {
        return this.config?.apiUrl ?? 'https://pokeapi.co/api/v2';
    }
    get optionAPIGW() {
        return this.config?.apigw ?? false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ConfigService, deps: [{ token: UI_KIT_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ConfigService, providedIn: 'root' }); }
}
export { ConfigService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ConfigService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [UI_KIT_CONFIG]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy91aS1raXQvc3JjL2NvbmZpZy9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUcvQyxNQUdhLGFBQWE7SUFDeEIsWUFDNkMsTUFBb0I7UUFBcEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztJQUM5RCxDQUFDO0lBRUosU0FBUztRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxJQUFJLDJCQUEyQixDQUFDO0lBQzVELENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxJQUFJLEtBQUssQ0FBQztJQUNyQyxDQUFDOytHQWZVLGFBQWEsa0JBRUYsYUFBYTttSEFGeEIsYUFBYSxjQUZaLE1BQU07O1NBRVAsYUFBYTs0RkFBYixhQUFhO2tCQUh6QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBR0ksUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVUlfS0lUX0NPTkZJRyB9IGZyb20gJy4vdG9rZW4tY29uZmlnJztcbmltcG9ydCB7IFVpS2l0Q29uZmlnIH0gZnJvbSAnLi9jb25maWcuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFVJX0tJVF9DT05GSUcpIHByaXZhdGUgY29uZmlnPzogVWlLaXRDb25maWdcbiAgKSB7fVxuXG4gIGxvZ0NvbmZpZygpIHtcbiAgICBjb25zb2xlLmxvZygnQ29uZmlnIGRlIGxhIGxpYnJlcsOtYTonLCB0aGlzLmNvbmZpZyk7XG4gIH1cblxuICBnZXQgYXBpVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnPy5hcGlVcmwgPz8gJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjInO1xuICB9XG5cbiAgZ2V0IG9wdGlvbkFQSUdXKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZz8uYXBpZ3cgPz8gZmFsc2U7XG4gIH1cbn1cbiJdfQ==