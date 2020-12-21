import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output()
  changeInFilter: EventEmitter<string> = new EventEmitter<string>();

  filterText: string;
  filterPlaceholder: string;

  constructor() { }

  ngOnInit(): void {
    this.filterPlaceholder = 'Buscar por id o texto de la imagen';
  }

  updateListPicturesToShow(): void {
    this.changeInFilter.emit(this.filterText);
  }

}
