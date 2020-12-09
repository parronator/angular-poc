import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-header-only-layout',
  templateUrl: './header-only-layout.component.html',
  styleUrls: ['./header-only-layout.component.scss']
})
export class HeaderOnlyLayoutComponent implements OnInit {

  @Input()
  title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
