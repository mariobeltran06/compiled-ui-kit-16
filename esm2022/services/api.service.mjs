import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../config/config.service";
class ApiService {
    constructor(http, configS) {
        this.http = http;
        this.configS = configS;
        this.apiBase = this.configS.apiUrl;
    }
    getAllDataPokemon() {
        if (this.configS.optionAPIGW) {
            return this.http.get(`${this.apiBase}/pokemon/pikachu`);
        }
        else {
            return this.http.get(`${this.apiBase}/pokemon/charmander`);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ApiService, deps: [{ token: i1.HttpClient }, { token: i2.ConfigService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ApiService, providedIn: 'root' }); }
}
export { ApiService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ApiService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.ConfigService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy91aS1raXQvc3JjL3NlcnZpY2VzL2FwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFNM0MsTUFHYSxVQUFVO0lBRXJCLFlBQW9CLElBQWdCLEVBQVUsT0FBc0I7UUFBaEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFEbkQsWUFBTyxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2dCLENBQUM7SUFFeEUsaUJBQWlCO1FBQ2YsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sa0JBQWtCLENBQUMsQ0FBQztTQUNsRTthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVSxHQUFHLElBQUksQ0FBQyxPQUFPLHFCQUFxQixDQUFDLENBQUM7U0FDckU7SUFDSCxDQUFDOytHQVZVLFVBQVU7bUhBQVYsVUFBVSxjQUZULE1BQU07O1NBRVAsVUFBVTs0RkFBVixVQUFVO2tCQUh0QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBva2Vtb24gfSBmcm9tICcuLi9wdWJsaWMtYXBpJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IGFwaUJhc2U6IHN0cmluZyA9IHRoaXMuY29uZmlnUy5hcGlVcmw7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBjb25maWdTOiBDb25maWdTZXJ2aWNlKSB7fVxuXG4gIGdldEFsbERhdGFQb2tlbW9uKCk6IE9ic2VydmFibGU8UG9rZW1vbj4ge1xuICAgIGlmICh0aGlzLmNvbmZpZ1Mub3B0aW9uQVBJR1cpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFBva2Vtb24+KGAke3RoaXMuYXBpQmFzZX0vcG9rZW1vbi9waWthY2h1YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFBva2Vtb24+KGAke3RoaXMuYXBpQmFzZX0vcG9rZW1vbi9jaGFybWFuZGVyYCk7XG4gICAgfVxuICB9XG59XG4iXX0=