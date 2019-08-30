import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupbyPipe } from './groupby.pipe';



@NgModule({
  declarations: [GroupbyPipe],
  imports: [
    CommonModule
  ],
  exports: [
    GroupbyPipe
  ]
})
export class PipesModule { }
