import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class GetImagesService {
    results: string[];
    private readonly getUri =
        'https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=ui';

    constructor(private http: HttpClient) { }

    getImages(): Observable<Array<any>> {
        // return this.http.get(this.getUri)
        //     .map(response => response.json());
        return null;
    }
}
