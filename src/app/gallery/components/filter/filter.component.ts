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

  constructor() { }

  ngOnInit(): void {}

  updateListPicturesToShow(): void {
    this.changeInFilter.emit(this.filterText);
  }

}
