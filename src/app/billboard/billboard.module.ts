import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillboardRoutingModule } from './billboard-routing.module';
import { BillboardComponent } from './billboard.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    BillboardComponent
  ],
  imports: [
    CommonModule,
    BillboardRoutingModule,
    SharedModule
  ]
})
export class BillboardModule { }
