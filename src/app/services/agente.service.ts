import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {MessageService} from '../services/message.service';
import {Agente} from '../models/agente';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgenteService {

    /**
     * URL to web api
     */
    private apiURL = environment.baseApiUrl + 'agentes';

    constructor(private http: HttpClient, private messageService: MessageService) {
    }

    getAgentes(params): Observable<Agente[]> {
        return this.http.post<Agente[]>(this.apiURL, params)
            .pipe(
                tap(_ => this.log('fetched agentes')),
                catchError(this.handleError<Agente[]>('getAgentes'))
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
        this.messageService.add(`AgenteService: ${message}`);
    }
}
