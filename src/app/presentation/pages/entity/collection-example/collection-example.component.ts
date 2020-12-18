import { Component, OnInit } from '@angular/core';
import {collectionSingleFixture} from '../../../../../fixture/collection';

@Component({
  selector: 'app-collection-example',
  templateUrl: './collection-example.component.html',
  styleUrls: ['./collection-example.component.scss']
})
export class CollectionExampleComponent implements OnInit {

  exampleCollection = collectionSingleFixture;
  constructor() { }

  ngOnInit(): void {
  }

}
