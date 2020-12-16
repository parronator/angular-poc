import { Component, OnInit } from '@angular/core';
import {collectionFixture} from '../../../../fixture/collection';

@Component({
  selector: 'app-collection-example',
  templateUrl: './collection-example.component.html',
  styleUrls: ['./collection-example.component.scss']
})
export class CollectionExampleComponent implements OnInit {

  exampleCollection = collectionFixture;
  constructor() { }

  ngOnInit(): void {
  }

}
