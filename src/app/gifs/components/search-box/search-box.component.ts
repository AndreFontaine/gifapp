import { Component, ElementRef, ViewChild } from '@angular/core';

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

  searchTag() {
    console.log(this.tagInput.nativeElement.value);
  }

}
