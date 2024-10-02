import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];
  private GIFT_API_KEY = 'fL4ZB3pubtUhgvvIRCFPl6qD1nwsNDLq';

  get tagHistory(){
    return [...this._tagsHistory];
  }

  constructor() { }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase().trim();
    this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag);
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.slice(0, 10);
  }

  public searchTag(tag: string): void {
    if(!tag) return;
    this.organizeHistory(tag);
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${this.GIFT_API_KEY}&limit=2&q=${tag}`)
      .then( res => res.json())
      .then( data => console.log(data));
  }

}
