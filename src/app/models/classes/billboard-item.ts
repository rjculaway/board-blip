import { Billboard } from "@interfaces/billboard";
import { BillboardType } from "@enums/billboard-type";

export class BillboardItem implements Billboard {
  id: string;
  name: string;
  isDigital: boolean;
  locations: Array<Location>;
  slideIntervalInSeconds: number;
  slides: string[];

  type: BillboardType;
  locationCount: number;

  constructor({
    id,
    name,
    isDigital,
    locations,
    slideIntervalInSeconds,
    slides
  }: Billboard) {
    this.id = id;
    this.name = name;
    this.isDigital = isDigital;
    this.locations = locations;
    this.slideIntervalInSeconds = slideIntervalInSeconds;
    this.slides = slides;

    this.setBillboardType();
    this.setLocationCount();
  }

  private setBillboardType() {
    this.type = this.isDigital
      ? BillboardType.Digital
      : BillboardType.Traditional;
  }

  private setLocationCount() {
    this.locationCount = this.locations.length;
  }
}
