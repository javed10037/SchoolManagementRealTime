import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
@Injectable()
export class ZoneTypeService {
    constructor(private http: HttpClient, private authService: AuthService, private route: Router) {
    }
    public getZoneTypes(p: number, ps: number, sort: any) {
        return this.http.get('/api/zoneTypes.json/' + p + '/' + ps + '/' + sort.sortBy + '/' + sort.isSortAscending, {
            responseType: 'json'
        }).pipe(
            map(res =>  res)
        );
    }
    public getAllZoneTypesWithFilter(str: any) {
        const obj = this;
        return this.http.get('/api/zoneTypes/autocomplete.json/' + str, {
            responseType: 'json'
        }).pipe(
            map(res =>  res)
        );
    }
    public getAllZoneTypesNotInClassrrom(str: any) {
        return this.http.get('/api/zoneTypes/autocomplete-not-in-teacher-student.json/' + str, {
            responseType: 'json'
        }).pipe(
            map(res =>  res)
        );
    }
    public getZoneType(id: string) {
        const obj = this;
        return this.http.get('/api/zoneTypes/view.json/' + id, {
            responseType: 'json'
        }).pipe(
            map(res =>  res)
        );
    }
    public delete(id: string) {
        const obj = this;
        return this.http.get('/api/zoneTypes/delete.json/' + id, {
            responseType: 'json'
        }).pipe(
            map(res =>  res)
        );
    }
    public save(data: any) {
        // console.log(data);
        const obj = this;
        let url = '/api/zoneTypes/add.json';
        let param = {};
        if (data['_id']) {
            url = '/api/zoneTypes/update.json';
            param = {
                responseType: 'json',
                zoneType: {
                    _id: data['_id'],
                    name: data['name'],
                    isActive: data['isActive'],
                    modifiedOn: new Date(),
                    modifiedBy: this.authService.loggedId
                }
            };
        } else {
            param = {
                responseType: 'json',
                zoneType: {
                    name: data['name'],
                    isActive: data['isActive'],
                    createdOn: new Date(),
                    createdBy: this.authService.loggedId
                }
            };
        }
        return this.http.post(url, param).pipe(
            map(res =>  res)
        );
    }
}
