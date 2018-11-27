import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class PeticionesService {
    public url: string;

    constructor(public _http: HttpClient) {
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }

    getPrueba() {
        return 'Hola mundo desde el servicio';
    }

    getArticulos(): Observable<any> {
        return this._http.get(this.url);
    }
}

