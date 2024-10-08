import { Component, Input } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: 'card-list.component.html',
  styleUrl: 'card-list.component.css'
})
export class CardListComponent {

  constructor(private gifsService: GifsService){

  }

  get tags() {
    return this.gifsService.tagHistory;
  }

  get currentTag() {
    return this.gifsService.tagHistory[0];
  }

  get gifs() {
    return this.gifsService.gifs;
  }



}
