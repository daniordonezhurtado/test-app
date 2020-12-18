import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output()
  changeInFilter: EventEmitter<string>;

  filterText: string;

  constructor() {
    this.changeInFilter = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  /** Emite un evento cuando el usuario
  *   escriba en el buscador para actualizar
  *   la lista de imagenes que vera
  */
  updateListToShow() {
    this.changeInFilter.emit(this.filterText);
  }

}
