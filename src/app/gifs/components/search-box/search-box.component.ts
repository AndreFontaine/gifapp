import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar</h5>
    <input (keyup.enter)="searchTag()" type="text"
      class="form-control"
      placeholder="buscar gifs"
      #txtTagInput
    />
  `
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService){

  }

  searchTag() {
    this.gifsService.searchTag(this.tagInput.nativeElement.value);
    this.tagInput.nativeElement.value = '';
  }

}
