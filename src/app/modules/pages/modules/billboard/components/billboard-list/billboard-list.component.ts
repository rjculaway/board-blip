import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject, Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

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
  filteredBillboards: Array<BillboardItem>;
  filterString: string;

  private $filterStringSubject: Subject<string> = new Subject<string>();

  private $getAllBillboardSubscription: Subscription;
  private $subscribeToFilterChange: Subscription;

  constructor(private billboardService: BillboardService) {}

  ngOnInit(): void {
    this.subscribeToFilter();
    this.getBillboards();
  }

  ngOnDestroy(): void {
    if (this.$getAllBillboardSubscription) {
      this.$getAllBillboardSubscription.unsubscribe();
    }
  }

  search() {
    this.$filterStringSubject.next(this.filterString);
  }

  private subscribeToFilter() {
    this.$subscribeToFilterChange = this.$filterStringSubject
      .pipe(
        distinctUntilChanged(),
        debounceTime(500)
      )
      .subscribe(value => {
        this.applyFilter(value);
      });
  }

  private applyFilter(value: string) {
    this.filteredBillboards = this.billboards.filter(
      b =>
        b.client.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
        b.name.toLocaleLowerCase().indexOf(value.toLowerCase()) >= 0
    );
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

        if (this.filterString) {
          this.applyFilter(this.filterString);
        } else {
          this.filteredBillboards = this.billboards;
        }
      });
  }
}
