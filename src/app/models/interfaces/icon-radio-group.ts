export interface IconRadioGroup {
  name: string;
  required: boolean;
  options: Array<{
    label: string;
    value: any;
    icon: string;
    isIconLeftAlign?: boolean;
    description: string;
  }>;
}
