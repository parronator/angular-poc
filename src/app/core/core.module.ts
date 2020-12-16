import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ShadeFacade} from './shade/domain/shadeFacade';
import {ProductFacade} from './product/domain/productFacade';
import {ProductHttpFacade} from './product/infrastructure/productHttpFacade';
import {ShadeHttpFacade} from './shade/infrastructure/shadeHttpFacade';

@NgModule({
  imports: [
    SharedModule,
  ],
  providers: [
    {provide: ShadeFacade, useClass: ShadeHttpFacade},
    {provide: ProductFacade, useClass: ProductHttpFacade}
  ],
})
export class CoreModule {
}
