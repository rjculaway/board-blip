import { Billboard } from "@interfaces/billboard";
import { BillboardType } from "@enums/billboard-type";

export class BillboardItem implements Billboard {
  id: string;
  name: string;
  isElectronic: boolean;
  locations: Array<Location>;
  images: string[];

  type: BillboardType;
  locationCount: number;

  constructor({
    id,
    name,
    isElectronic,
    locations,
    images
  }: Billboard) {
    this.id = id;
    this.name = name;
    this.isElectronic = isElectronic;
    this.locations = locations;
    this.images = images;

    this.setBillboardType();
    this.setLocationCount();
  }

  private setBillboardType() {
    this.type = this.isElectronic
      ? BillboardType.Electronic
      : BillboardType.Traditional;
  }

  private setLocationCount() {
    this.locationCount = this.locations.length;
  }
}
