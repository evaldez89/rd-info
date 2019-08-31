import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateSlidesComponent } from './rate-slides/rate-slides.component';
import { PipesModule } from '../pipes/pipes.module';
import { IonicModule } from '@ionic/angular';
import { FuelPricesComponent } from './fuel-prices/fuel-prices.component';



@NgModule({
  declarations: [
    RateSlidesComponent,
    FuelPricesComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    IonicModule
  ],
  exports: [
    RateSlidesComponent,
    FuelPricesComponent
  ]
})
export class ComponentsModule { }
