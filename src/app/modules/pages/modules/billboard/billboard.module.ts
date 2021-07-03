import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillboardRoutingModule } from './billboard-routing.module';
import { BillboardComponent } from './billboard.component';
import { SharedModule } from '@shared/shared.module';
import { BillboardListComponent } from './components/billboard-list/billboard-list.component';


@NgModule({
  declarations: [
    BillboardComponent,
    BillboardListComponent
  ],
  imports: [
    CommonModule,
    BillboardRoutingModule,
    SharedModule
  ]
})
export class BillboardModule { }
