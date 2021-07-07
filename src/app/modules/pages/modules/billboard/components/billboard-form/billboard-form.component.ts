import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

import { ToastService } from "@core/services/toast/toast.service";
import { BillboardService } from "@core/services/billboard/billboard.service";
import { BillboardType } from "@enums/billboard-type";
import { IconRadioGroup } from "@interfaces/icon-radio-group";
import { ImageUpload } from "@interfaces/image-upload";
import { Billboard } from "@interfaces/billboard";
import { Geopoint } from "@interfaces/geopoint";
import { MapMarker } from "@interfaces/map-marker";

@Component({
  selector: "app-billboard-form",
  templateUrl: "./billboard-form.component.html",
  styleUrls: ["./billboard-form.component.scss"]
})
export class BillboardFormComponent implements OnInit {

 id: string | null;
  billboard: Billboard | null;
  images: FormArray;
  formGroup: FormGroup;

  mapMarkers: Array<MapMarker>;
  radioGroupConfig: IconRadioGroup;
  imageUploadConfig: Array<ImageUpload> = [];

  electronicBillboard = BillboardType.Electronic;
  traditionalBillboard = BillboardType.Traditional;


  private routeSubscription$: Subscription;
  private getByIdSubscription$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private billboardService: BillboardService
  ) { }

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

  get imageFormGroup() {
    return this.formGroup.get("images") as FormGroup;
  }

  addLocation({ latitude, longitude }: Geopoint) {
    const locationFormGroup = this.formGroup.get('location');

    locationFormGroup?.setValue({
      latitude,
      longitude
    });
  }

  create() {
    this.resetForm();
  }

  save() {
    if (this.formGroup.valid) {
      if (this.id) {
        this.billboardService.update(this.id, this.formGroup.value)
        .then(() => {
          this.toastService.showSuccess('Your billboard has been updated.');
        })
        .catch(() => {
          this.toastService.showError("Oops! We couldn't update your billboard at the moment.");
        });
      } else {
        this.billboardService.create(this.formGroup.value).then(({ id }) => {
          this.id = id;
          this.toastService.showSuccess('Your billboard has been created.');
        })
        .catch(() => {
          this.toastService.showError("Sorry! We couldn't create your billboard.");
        });
      }
    } else {

      this.formGroup.markAsDirty();
      this.toastService.showError("Oops! Looks like you missed some of the fields");
    }
  }

  delete() {
    if (this.id) {
      this.billboardService.delete(this.id).then(() => {
        this.toastService.showSuccess('Your billboard has been removed.');
        this.resetForm();
      })
      .catch(() => {
        this.toastService.showError("Something went wrong. It's our fault!");
      });
    }
  }

  private resetForm() {
    this.id = null;
    this.billboard = null;
    this.formGroup.reset();
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

  private initFormGroup() {
    const data = this.billboard;
    const lng = data?.location?.longitude || 0;
    const lat = data?.location?.latitude || 0;

    const locationFormGroup = this.formBuilder.group({
      longitude: [lng],
      latitude: [lat]
    });

    this.formGroup = this.formBuilder.group({
      name: [data?.name, Validators.required],
      isElectronic: [data?.isElectronic, Validators.required],
      client: [data?.client, Validators.required],
      publishDate: [data?.publishDate],
      duration: [data?.duration],
      location: locationFormGroup
    });

    this.initImages(data?.images);
    this.initMapMarkers(data?.location);
    this.initRadioGroupConfig();

    this.formGroup.addControl("images", this.images);
  }

  private initMapMarkers(location?: Geopoint) {
    if (!this.mapMarkers) {
      this.mapMarkers = [];
    }

    if (location) {
      const marker = {
        position: {
          lat: location.latitude,
          lng: location.longitude
        }
      };

      this.mapMarkers = [marker];
    }
  }

  private initImages(data?: Array<string>) {
    this.images = new FormArray([]);

    for (let i = 0; i < 4; i++) {
      const slide = data && data[i] ? data[i] : null;

      this.imageUploadConfig.push({ name: i.toString() });
      this.images.push(this.formBuilder.control(slide));
    }
  }

  private initRadioGroupConfig() {
    this.radioGroupConfig = {
      name: "isElectronic",
      required: true,
      options: [
        {
          label: "Electronic",
          value: true,
          icon: BillboardType.Electronic,
          description: 'Large LED display'
        },
        {
          label: "Traditional",
          value: false,
          icon: BillboardType.Traditional,
          isIconLeftAlign: true,
          description: 'Bus shelter ads, print, vinyl, etc.'
        }
      ]
    };
  }
}