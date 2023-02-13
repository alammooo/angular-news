import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  constructor(private http: HttpClient) {}

  getIds(): Observable<number[]> {
    let params = new HttpParams();
    return this.http.get<number[]>(
      'https://hacker-news.firebaseio.com/v0/askstories.json',
      { params }
    );
  }

  getItem(id: number): Observable<any> {
    let params = new HttpParams();

    return this.http.get<any>(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
      { params }
    );
  }
}
