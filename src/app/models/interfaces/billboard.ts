import { Geopoint } from "./geopoint";

export interface Billboard {
  id: string;
  name: string;
  client: string;
  isElectronic: boolean;
  location: Geopoint;
  images: Array<string>;
  publishDate: Date;
  duration: number;
}
