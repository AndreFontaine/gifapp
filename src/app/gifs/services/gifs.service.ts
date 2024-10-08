import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];
  private _gifList: Gif[] = [];

  private GIFT_API_KEY = 'fL4ZB3pubtUhgvvIRCFPl6qD1nwsNDLq';
  private SERVICE_URL = 'https://api.giphy.com/v1/gifs';
  private LIMIT = 10;

  get tagHistory(){
    return [...this._tagsHistory];
  }

  get gifs(){
    return [...this._gifList];
  }

  constructor(private http: HttpClient) { }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase().trim();
    this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag);
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.slice(0, 10);
  }

  public searchTag(tag: string): void {
    if(!tag) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.GIFT_API_KEY)
      .set('limit', this.LIMIT)
      .set('q', tag);

    this.http
      .get<SearchResponse>(`${this.SERVICE_URL}/search`, { params })
      .subscribe( (res) => {
        this._gifList = res.data;
        console.log('gifs', res.data);
      });
  }

}
