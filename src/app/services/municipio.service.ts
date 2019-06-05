import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {MessageService} from '../services/message.service';
import {Municipio} from '../models/municipio';
import {environment} from '../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class MunicipioService {

    /**
     * URL to web api
     */
    private apiURL = environment.baseApiUrl + 'municipios';

    constructor(private http: HttpClient, private messageService: MessageService) {
    }

    getMunicipios(provinciaId: number): Observable<Municipio[]> {
        return this.http.post<Municipio[]>(this.apiURL, {
            provincia_id: provinciaId
        })
            .pipe(
                tap(_ => this.log('fetched municipios')),
                catchError(this.handleError<Municipio[]>('getMunicipios'))
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
        this.messageService.add(`MunicipioService: ${message}`);
    }
}
