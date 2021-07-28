import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject('');;
    public currentUser: Observable<any>;


    constructor(private http: HttpClient) {
        if (localStorage.getItem('currentUser') !== null)
            this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentUser'));

        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {

        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {      
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);              
                return user;
            }));
    }



    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }


}