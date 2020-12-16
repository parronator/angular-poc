import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ShadeFacade} from './shade/domain/shadeFacade';
import {ShadeFakeFacade} from './shade/infrastructure/shadeFakeFacade';
import {ProductFacade} from './product/domain/productFacade';
import {ProductHttpFacade} from './product/infrastructure/productHttpFacade';

@NgModule({
  imports: [
    SharedModule,
  ],
  providers: [
    {provide: ShadeFacade, useClass: ShadeFakeFacade},
    {provide: ProductFacade, useClass: ProductHttpFacade}
  ],
})
export class CoreModule {
}
