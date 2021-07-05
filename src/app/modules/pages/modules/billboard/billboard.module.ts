import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "@shared/shared.module";

import { BillboardRoutingModule } from "./billboard-routing.module";
import { BillboardComponent } from "./billboard.component";
import { BillboardListComponent } from "./components/billboard-list/billboard-list.component";
import { BillboardFormComponent } from "./components/billboard-form/billboard-form.component";

@NgModule({
  declarations: [
    BillboardComponent,
    BillboardListComponent,
    BillboardFormComponent
  ],
  imports: [CommonModule, BillboardRoutingModule, SharedModule]
})
export class BillboardModule {}
