import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  constructor() { }
@Input() item:any;
  ngOnInit(): void {
  }

}
