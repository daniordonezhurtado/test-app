import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterText } from '../../model/filter-text.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() filterText: FilterText;

  @Output()
  changeInFilter: EventEmitter<string> = new EventEmitter<string>();

  idOrTextToFilter: string;
  filterPlaceholder: string;

  constructor() { }

  ngOnInit(): void {
    this.filterPlaceholder = 'Buscar por id o texto de la imagen';
  }

  updateListPicturesToShow(): void {
    this.changeInFilter.emit(this.idOrTextToFilter);
  }

}
