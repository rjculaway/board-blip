import { Component, OnInit, Input } from "@angular/core";
import { IconRadioGroup } from "@interfaces/icon-radio-group";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-icon-radio-group",
  templateUrl: "./icon-radio-group.component.html",
  styleUrls: ["./icon-radio-group.component.scss"]
})
export class IconRadioGroupComponent implements OnInit {
  @Input() config: IconRadioGroup;
  @Input() group: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
