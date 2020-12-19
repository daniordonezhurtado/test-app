import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Picture } from '../../model/picture.model';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PictureComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) cdkVirtualScrollViewport: CdkVirtualScrollViewport;
  @Input() listPictures: Picture[];

  constructor() { }

  ngOnInit(): void {}

  reloadScroll() {
    if(this.cdkVirtualScrollViewport) {
      this.cdkVirtualScrollViewport.scrollToIndex(0);
    }
  }

}
