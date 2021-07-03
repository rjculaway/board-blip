export interface Billboard {
  name: string;
  isDigital: boolean;
  locations: Array<any>;
  slideIntervalInSeconds: number;
  slides: Array<string>;
}
