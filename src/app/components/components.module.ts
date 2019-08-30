import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateSlidesComponent } from './rate-slides/rate-slides.component';
import { PipesModule } from '../pipes/pipes.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    RateSlidesComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    IonicModule
  ],
  exports: [
    RateSlidesComponent
  ]
})
export class ComponentsModule { }
