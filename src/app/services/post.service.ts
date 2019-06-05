import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {MessageService} from '../services/message.service';
import {Post} from '../models/post';
import {environment} from '../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class PostService {
    /**
     * URL to web api
     */
    private apiURL = environment.baseApiUrl + 'posts';


    constructor(private http: HttpClient, private messageService: MessageService) {
    }

    getPosts(params): Observable<Post[]> {
        return this.http.post<Post[]>(this.apiURL, params)
            .pipe(
                tap(_ => this.log('fetched posts')),
                catchError(this.handleError<Post[]>('getPosts'))
            );
    }

    getPost(postId: number): Observable<Post> {
        return this.http.post<Post>(environment.baseApiUrl + 'get_post', {id: postId})
            .pipe(
                tap(_ => this.log('fetched a singled post')),
                catchError(this.handleError<Post>('getPost'))
            );
    }

    sendComment(comment): Observable<any> {
        return this.http.post<Post>(environment.baseApiUrl + 'save_comment', comment)
            .pipe(
                tap(_ => this.log('fetched a singled post')),
                catchError(this.handleError<Post>('getPost'))
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
        this.messageService.add(`PostService: ${message}`);
    }
}
