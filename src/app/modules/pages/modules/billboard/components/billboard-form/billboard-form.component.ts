import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

import { BillboardService } from "@core/services/billboard/billboard.service";
import { Billboard } from "@core/interfaces/billboard";
import { BillboardType } from "@enums/billboard-type";

@Component({
  selector: "app-billboard-form",
  templateUrl: "./billboard-form.component.html",
  styleUrls: ["./billboard-form.component.scss"]
})
export class BillboardFormComponent implements OnInit {
  billboard: Billboard;
  images: FormArray;
  formGroup: FormGroup;

  electronicBillboard = BillboardType.Electronic;
  traditionalBillboard = BillboardType.Traditional;

  private id: string;

  private routeSubscription$: Subscription;
  private getByIdSubscription$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private billboardService: BillboardService
  ) {}

  ngOnInit(): void {
    this.routeSubscription$ = this.route.params.subscribe(params => {
      this.id = params["id"];
      this.getBillboard();
    });
  }

  ngOnDestroy(): void {
    if (this.getByIdSubscription$) {
      this.getByIdSubscription$.unsubscribe();
    }

    if (this.routeSubscription$) {
      this.routeSubscription$.unsubscribe();
    }
  }

  private initFormGroup() {
    const data = this.billboard || {};

    this.formGroup = this.formBuilder.group({
      name: [data.name, Validators.required],
      isElectronic: [data.isElectronic, Validators.required]
    });

    this.initImages(data.images);

    this.formGroup.addControl("images", this.images);
  }

  private initImages(data: Array<string>) {
    this.images = new FormArray([]);

    for (let i = 0; i < 5; i++) {
      const slide = data[i] ? data[i] : null;
      this.images.push(this.formBuilder.control(slide));
    }
  }

  private getBillboard() {
    if (this.id) {
      this.getByIdSubscription$ = this.billboardService
        .getById(this.id)
        .valueChanges()
        .subscribe(value => {
          if (value) {
            this.billboard = value;
            this.initFormGroup();
          }
        });
    } else {
      this.initFormGroup();
    }
  }
}
