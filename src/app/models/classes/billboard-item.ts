import { Billboard } from "@interfaces/billboard";
import { BillboardType } from "@enums/billboard-type";
import { Geopoint } from "@interfaces/geopoint";

export class BillboardItem implements Billboard {
  id: string;
  name: string;
  client: string;
  isElectronic: boolean;
  location: Geopoint;
  images: string[];
  publishDate: Date;
  duration: number;

  type: BillboardType;
  isPinned: boolean;

  constructor({
    id,
    name,
    client,
    isElectronic,
    location,
    images,
    publishDate,
    duration
  }: Billboard) {
    this.id = id;
    this.name = name;
    this.client = client;
    this.isElectronic = isElectronic;
    this.location = location;
    this.images = images;
    this.publishDate = publishDate;
    this.duration = duration;

    this.setBillboardType();
    this.setIsPinned();
  }

  private setBillboardType() {
    this.type = this.isElectronic
      ? BillboardType.Electronic
      : BillboardType.Traditional;
  }

  private setIsPinned() {
    const { longitude, latitude } = this.location;

    if (longitude || latitude) {
      this.isPinned = true;
    }
  }
}
