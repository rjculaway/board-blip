import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { BillboardService } from "@core/services/billboard/billboard.service";
import { BillboardItem } from "@classes/billboard-item";
import { Billboard } from "@interfaces/billboard";

@Component({
  selector: "app-billboard-list",
  templateUrl: "./billboard-list.component.html",
  styleUrls: ["./billboard-list.component.scss"]
})
export class BillboardListComponent implements OnInit, OnDestroy {
  billboards: Array<BillboardItem>;
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

  onSort({ column, direction }: any) {
    // resetting other headers
    // this.headers.forEach(header => {
    //   if (header.sortable !== column) {
    //     header.direction = '';
    //   }
    // });
    // // sorting countries
    // if (direction === '' || column === '') {
    //   this.countries = COUNTRIES;
    // } else {
    //   this.countries = [...COUNTRIES].sort((a, b) => {
    //     const res = compare(a[column], b[column]);
    //     return direction === 'asc' ? res : -res;
    //   });
    // }
  }

  private getBillboards(): void {
    this.$getAllBillboardSubscription = this.billboardService
      .getAll()
      .valueChanges({
        idField: "id"
      })
      .subscribe((result: Array<Billboard>) => {
        this.billboards = result.map((item: Billboard) => {
          return new BillboardItem(item);
        });
        console.log(result);
      });
  }
}
