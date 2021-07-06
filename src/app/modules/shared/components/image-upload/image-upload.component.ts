import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, AbstractControl, FormControl } from "@angular/forms";

import { ImageUpload } from "@interfaces/image-upload";
import { IconPath } from "@enums/icon-path";

@Component({
  selector: "app-image-upload",
  templateUrl: "./image-upload.component.html",
  styleUrls: ["./image-upload.component.scss"]
})
export class ImageUploadComponent implements OnInit {
  @Input() config: ImageUpload;
  @Input() group: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  onFileChange(event: any) {
    const files = event.target.files;
    const file = files[0];

    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result;
      const formControl = this.getFormControl();

      // We want to save the images in base64 string format
      formControl.patchValue(base64String);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  get imagePath() {
    const formControl = this.getFormControl();
    const path = formControl!.value || IconPath.ImageGallery;

    return path;
  }

  get isDefaultImage() {
    const formControl = this.getFormControl();
    return !formControl.value;
  }

  private getFormControl(): AbstractControl {
    return this.group.get(this.config.name) as AbstractControl;
  }
}
