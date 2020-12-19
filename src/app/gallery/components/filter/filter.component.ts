import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output()
  changeInFilter: EventEmitter<string>  = new EventEmitter<string>();

  filterText: string;

  ngOnInit(): void {}

  updateListPicturesToShow() {
    this.changeInFilter.emit(this.filterText);
  }

}
