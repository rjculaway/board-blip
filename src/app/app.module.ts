import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { CoreModule } from "@core/core.module";
import { httpClientProvider } from "@core/services/http-client/http-client.factory";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, CoreModule],
  providers: [httpClientProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
