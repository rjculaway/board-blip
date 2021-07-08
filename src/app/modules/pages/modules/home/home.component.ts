import { Component, OnInit } from "@angular/core";
import { BillboardItem } from "@classes/billboard-item";
import { BillboardService } from "@core/services/billboard/billboard.service";
import { Billboard } from "@interfaces/billboard";
import { MapMarker } from "@interfaces/map-marker";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  billboards: Array<BillboardItem>;
  blips: Array<MapMarker>;

  private $getAllBillboardSubscription: Subscription;

  constructor(private billboardService: BillboardService) {}

  ngOnInit(): void {
    this.getBillboards();
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

        this.blips = this.billboards.map(billboard => {
          return {
            title: billboard.client,
            label: billboard.name,
            position: {
              lat: billboard.location.latitude,
              lng: billboard.location.longitude
            }
          };
        });
      });
  }
}
