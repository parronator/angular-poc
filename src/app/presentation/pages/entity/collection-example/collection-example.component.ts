import { Component, OnInit } from '@angular/core';
import {collectionSingleFixture} from '../../../../../fixture/collection';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-collection-example',
  templateUrl: './collection-example.component.html',
  styleUrls: ['./collection-example.component.scss']
})
export class CollectionExampleComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }
  exampleCollection = collectionSingleFixture;

  ngOnInit(): void {
  }

}
