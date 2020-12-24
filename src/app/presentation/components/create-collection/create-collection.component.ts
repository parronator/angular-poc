import {Component, OnDestroy, OnInit} from '@angular/core';
import {CollectionService} from '../../../application/collection/collection.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Collection} from '../../../core/collection/domain/collection';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.scss']
})
export class CreateCollectionComponent implements OnInit, OnDestroy {

  form: FormGroup;
  result = '';
  private subscriptions: Array<Subscription>;
  error = false;

  constructor(private collectionService: CollectionService, private formBuilder: FormBuilder) {
    this.subscriptions = new Array<Subscription>();
    this.form = this.formBuilder.group({
      name: '',
    });
  }

  ngOnInit(): void {
    this.subscriptions.push(this.collectionService.error$.subscribe(error => this.error = error ));
  }

  async onSubmit(value: any): Promise<void>{
    const collection = await this.collectionService.create(Collection.create({id: 'test', name: value.name, shades: []}));
    if ( !this.error){
      console.log('collection created!');
      console.log(this.collectionService.state$.value.entities);
    }
    else{
      console.log('oops');
    }
    console.log(value);
    this.result = `${value.name}`;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
