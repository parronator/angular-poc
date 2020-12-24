import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ShadeFacade} from './shade/domain/shadeFacade';
import {ProductFacade} from './product/domain/productFacade';
import {ProductHttpFacade} from './product/infrastructure/productHttpFacade';
import {ShadeHttpFacade} from './shade/infrastructure/shadeHttpFacade';
import {CollectionFacade} from "./collection/domain/collectionFacade";
import {CollectionHttpFacade} from "./collection/infrastructure/collection-http-facade";

@NgModule({
  imports: [
    SharedModule,
  ],
  providers: [
    {provide: ShadeFacade, useClass: ShadeHttpFacade},
    {provide: ProductFacade, useClass: ProductHttpFacade},
    {provide: CollectionFacade, useClass: CollectionHttpFacade}
  ],
})
export class CoreModule {
}
