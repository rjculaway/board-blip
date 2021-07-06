import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BillboardComponent } from "./billboard.component";
import { BillboardFormComponent } from "./components/billboard-form/billboard-form.component";

const routes: Routes = [
  {
    path: "",
    component: BillboardComponent,
    children: [
      {
        path: "",
        component: BillboardFormComponent
      },
      {
        path: ":id/details",
        component: BillboardFormComponent
      },
      {
        path: "**",
        component: BillboardFormComponent
      }
    ]
  },
  {
    path: "**",
    component: BillboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillboardRoutingModule {}
