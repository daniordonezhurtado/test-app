import { Component, Input, OnInit } from '@angular/core';
import { Picture } from '../../model/picture.model';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  @Input() listPictures: Picture[];

  constructor() { }

  ngOnInit(): void {
  }

}
