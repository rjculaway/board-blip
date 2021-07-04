export interface Billboard {
  id: string;
  name: string;
  isDigital: boolean;
  locations: Array<Location>;
  slideIntervalInSeconds: number;
  slides: Array<string>;
}
