import { Component, OnInit } from "@angular/core";
import { ToastService } from "@core/services/toast/toast.service";

@Component({
  selector: "app-toast",
  templateUrl: "./toast.component.html",
  styleUrls: ["./toast.component.scss"]
})
export class ToastComponent implements OnInit {
  constructor(private toastService: ToastService) {}

  ngOnInit(): void {}

  get toasts() {
    return this.toastService.toasts;
  }

  clear() {
    this.toastService.clear();
  }
}
