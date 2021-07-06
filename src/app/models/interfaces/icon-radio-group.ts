export interface IconRadioGroup {
  name: string;
  options: Array<{
    label: string;
    value: any;
    icon: string;
    isIconLeftAlign?: boolean;
    description: string;
  }>;
}
