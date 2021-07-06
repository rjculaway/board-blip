import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "home"
      },
      {
        path: "home",
        loadChildren: () => import("@home/home.module").then(m => m.HomeModule)
      },
      {
        path: "billboard",
        loadChildren: () =>
          import("@billboard/billboard.module").then(m => m.BillboardModule)
      }
    ]
  },
  {
    path: "**",
    component: PagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
