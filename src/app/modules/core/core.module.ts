import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";

import { environment } from "@environment/environment";
import { ToastComponent } from "./components/toast/toast.component";
import { NgbToastModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [ToastComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbToastModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  exports: [ToastComponent]
})
export class CoreModule {}
