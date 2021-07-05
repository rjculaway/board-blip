export interface Billboard {
  id: string;
  name: string;
  isElectronic: boolean;
  locations: Array<Location>;
  images: Array<string>;
}
