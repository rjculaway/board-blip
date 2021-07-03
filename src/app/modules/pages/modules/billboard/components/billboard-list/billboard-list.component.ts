import { Component, OnInit, OnDestroy } from "@angular/core";
import { BillboardService } from "@core/services/billboard/billboard.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-billboard-list",
  templateUrl: "./billboard-list.component.html",
  styleUrls: ["./billboard-list.component.scss"]
})
export class BillboardListComponent implements OnInit, OnDestroy {
  private $getAllBillboardSubscription: Subscription;

  constructor(private billboardService: BillboardService) {}

  ngOnInit(): void {
    this.getBillboards();
  }

  ngOnDestroy(): void {
    if (this.$getAllBillboardSubscription) {
      this.$getAllBillboardSubscription.unsubscribe();
    }
  }

  private getBillboards(): void {
    this.$getAllBillboardSubscription = this.billboardService
      .getAll()
      .snapshotChanges()
      .subscribe(result => {
        console.log(result);
      });
  }
}
