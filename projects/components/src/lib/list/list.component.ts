import { Component, Input, OnInit } from '@angular/core';
import { Item } from './list.interface';

@Component({
  selector: 'ui-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() items: Array<Item>;

  constructor() { }

  ngOnInit(): void {
  }

}
