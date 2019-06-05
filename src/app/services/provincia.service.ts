import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {MessageService} from '../services/message.service';
import {Provincia} from '../models/provincia';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

    /**
     * URL to web api
     */
    private apiURL = environment.baseApiUrl + 'provincias';

    constructor(private http: HttpClient, private messageService: MessageService) {
    }

    getProvincias(): Observable<Provincia[]> {
        return this.http.get<Provincia[]>(this.apiURL, httpOptions)
            .pipe(
                tap(_ => this.log('fetched provincias')),
                catchError(this.handleError<Provincia[]>('getProvincias'))
            );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    private log(message: string) {
        this.messageService.add(`ProvinciaService: ${message}`);
    }
}
