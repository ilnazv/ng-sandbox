import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export interface ICard {
  id: string;
  description: string;
  name: string;
  date: Date;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class TrelloApiService {

  constructor(private http: HttpClient) { }

  getCardsList(): Observable<ICard[]> {
    const url = `https://api.trello.com/1/boards/6KB0ZiZa/cards`;
    return this.http.get(url).pipe(
      delay(2000),
      map((resp: any[]) => {
        resp.map(x => <ICard>{
          id: x.id,
          color: x.labels && x.labels.length > 0 ? x.labels[0].color : '',
          description: x.desc,
          name: x.name,
          date: x.dateLastActivity
        });
        return resp;
      }));
  }
}
