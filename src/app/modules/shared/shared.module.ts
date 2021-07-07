import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { GoogleMapsModule } from "@angular/google-maps";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { IconRadioGroupComponent } from "./components/icon-radio-group/icon-radio-group.component";
import { ImageUploadComponent } from "./components/image-upload/image-upload.component";
import { GoogleMapsComponent } from "./components/google-maps/google-maps.component";

@NgModule({
  declarations: [
    IconRadioGroupComponent,
    ImageUploadComponent,
    GoogleMapsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    GoogleMapsModule,
    NgbModule
  ],
  exports: [
    GoogleMapsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,

    IconRadioGroupComponent,
    ImageUploadComponent,
    GoogleMapsComponent
  ]
})
export class SharedModule {}
