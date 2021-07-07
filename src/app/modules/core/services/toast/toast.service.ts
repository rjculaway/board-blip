import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ToastService {
  toasts: Array<{
    message: string;
    class: string;
  }> = [];

  constructor() {}

  showSuccess(message: string) {
    // show one toast at a time
    this.toasts = [
      {
        message,
        class: "bg-success text-light"
      }
    ];
  }

  showError(message: string) {
    this.toasts = [
      {
        message,
        class: "bg-danger text-light"
      }
    ];
  }

  clear() {
    this.toasts = [];
  }
}
