import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {

    }
    getData() {
        return this.http.get('http://localhost:8080/api/v1/user').subscribe(data => console.log(data));
    }
}
