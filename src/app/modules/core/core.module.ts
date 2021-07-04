import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";

import { environment } from "@environment/environment";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ]
})
export class CoreModule {}
