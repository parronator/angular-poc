import { Component, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'ui-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorPickerComponent),
      multi: true
    }
  ]
})
export class ColorPickerComponent implements ControlValueAccessor {
  @Input()
  selectedColor = 0;
  @Input()
  isDisabled = false;

  // Sample Data

  colors = [
    {
      ncs: 'R',
      hsv: { H: '0', S: '100', V: '90' },
      rgb: { R: '230', G: '0', B: '0' },
      hex: 'E60000'
    },
    {
      ncs: 'R10B',
      hsv: { H: '348', S: '100', V: '90' },
      rgb: { R: '230', G: '0', B: '46' },
      hex: 'E6002E'
    },
    {
      ncs: 'R20B',
      hsv: { H: '336', S: '100', V: '90' },
      rgb: { R: '230', G: '0', B: '92' },
      hex: 'E6005C'
    },
    {
      ncs: 'R30B',
      hsv: { H: '324', S: '100', V: '90' },
      rgb: { R: '230', G: '0', B: '138' },
      hex: 'E6008A'
    },
    {
      ncs: 'R40B',
      hsv: { H: '312', S: '100', V: '90' },
      rgb: { R: '230', G: '0', B: '184' },
      hex: 'E600B8'
    },
    {
      ncs: 'R50B',
      hsv: { H: '300', S: '100', V: '90' },
      rgb: { R: '230', G: '0', B: '230' },
      hex: 'E600E6'
    },
    {
      ncs: 'R60B',
      hsv: { H: '288', S: '100', V: '90' },
      rgb: { R: '184', G: '0', B: '230' },
      hex: 'B800E6'
    },
    {
      ncs: 'R70B',
      hsv: { H: '276', S: '100', V: '90' },
      rgb: { R: '138', G: '0', B: '230' },
      hex: '8A00E6'
    },
    {
      ncs: 'R80B',
      hsv: { H: '264', S: '100', V: '90' },
      rgb: { R: '92', G: '0', B: '230' },
      hex: '5C00E6'
    },
    {
      ncs: 'R90B',
      hsv: { H: '252', S: '100', V: '90' },
      rgb: { R: '46', G: '0', B: '230' },
      hex: '2E00E6'
    },
    {
      ncs: 'B',
      hsv: { H: '240', S: '100', V: '90' },
      rgb: { R: '0', G: '0', B: '230' },
      hex: '0000E6'
    },
    {
      ncs: 'B10G',
      hsv: { H: '228', S: '100', V: '90' },
      rgb: { R: '0', G: '46', B: '230' },
      hex: '002EE6'
    },
    {
      ncs: 'B20G',
      hsv: { H: '216', S: '100', V: '90' },
      rgb: { R: '0', G: '92', B: '230' },
      hex: '005CE6'
    },
    {
      ncs: 'B30G',
      hsv: { H: '204', S: '100', V: '90' },
      rgb: { R: '0', G: '138', B: '230' },
      hex: '008AE6'
    },
    {
      ncs: 'B40G',
      hsv: { H: '192', S: '100', V: '90' },
      rgb: { R: '0', G: '184', B: '230' },
      hex: '00B8E6'
    },
    {
      ncs: 'B50G',
      hsv: { H: '180', S: '100', V: '90' },
      rgb: { R: '0', G: '230', B: '230' },
      hex: '00E6E6'
    },
    {
      ncs: 'B60G',
      hsv: { H: '168', S: '100', V: '90' },
      rgb: { R: '0', G: '230', B: '184' },
      hex: '00E6B8'
    },
    {
      ncs: 'B70G',
      hsv: { H: '156', S: '100', V: '90' },
      rgb: { R: '0', G: '230', B: '138' },
      hex: '00E68A'
    },
    {
      ncs: 'B80G',
      hsv: { H: '144', S: '100', V: '90' },
      rgb: { R: '0', G: '230', B: '92' },
      hex: '00E65C'
    },
    {
      ncs: 'B90G',
      hsv: { H: '132', S: '100', V: '90' },
      rgb: { R: '0', G: '230', B: '46' },
      hex: '00E62E'
    },
    {
      ncs: 'G',
      hsv: { H: '120', S: '100', V: '90' },
      rgb: { R: '0', G: '230', B: '0' },
      hex: '00E600'
    },
    {
      ncs: 'G10Y',
      hsv: { H: '114', S: '100', V: '90' },
      rgb: { R: '23', G: '230', B: '0' },
      hex: '17E600'
    },
    {
      ncs: 'G20Y',
      hsv: { H: '108', S: '100', V: '90' },
      rgb: { R: '46', G: '230', B: '0' },
      hex: '2EE600'
    },
    {
      ncs: 'G30Y',
      hsv: { H: '102', S: '100', V: '90' },
      rgb: { R: '69', G: '230', B: '0' },
      hex: '45E600'
    },
    {
      ncs: 'G40Y',
      hsv: { H: '96', S: '100', V: '90' },
      rgb: { R: '92', G: '230', B: '0' },
      hex: '5CE600'
    },
    {
      ncs: 'G50Y',
      hsv: { H: '90', S: '100', V: '90' },
      rgb: { R: '115', G: '230', B: '0' },
      hex: '73E600'
    },
    {
      ncs: 'G60Y',
      hsv: { H: '84', S: '100', V: '90' },
      rgb: { R: '138', G: '230', B: '0' },
      hex: '8AE600'
    },
    {
      ncs: 'G70Y',
      hsv: { H: '78', S: '100', V: '90' },
      rgb: { R: '161', G: '230', B: '0' },
      hex: 'A1E600'
    },
    {
      ncs: 'G80Y',
      hsv: { H: '72', S: '100', V: '90' },
      rgb: { R: '184', G: '230', B: '0' },
      hex: 'B8E600'
    },
    {
      ncs: 'G90Y',
      hsv: { H: '66', S: '100', V: '90' },
      rgb: { R: '207', G: '230', B: '0' },
      hex: 'CFE600'
    },
    {
      ncs: 'Y',
      hsv: { H: '60', S: '100', V: '90' },
      rgb: { R: '230', G: '230', B: '0' },
      hex: 'E6E600'
    },
    {
      ncs: 'Y10R',
      hsv: { H: '54', S: '100', V: '90' },
      rgb: { R: '230', G: '207', B: '0' },
      hex: 'E6CF00'
    },
    {
      ncs: 'Y20R',
      hsv: { H: '48', S: '100', V: '90' },
      rgb: { R: '230', G: '184', B: '0' },
      hex: 'E6B800'
    },
    {
      ncs: 'Y30R',
      hsv: { H: '42', S: '100', V: '90' },
      rgb: { R: '230', G: '161', B: '0' },
      hex: 'E6A100'
    },
    {
      ncs: 'Y40R',
      hsv: { H: '36', S: '100', V: '90' },
      rgb: { R: '230', G: '138', B: '0' },
      hex: 'E68A00'
    },
    {
      ncs: 'Y50R',
      hsv: { H: '30', S: '100', V: '90' },
      rgb: { R: '230', G: '115', B: '0' },
      hex: 'E67300'
    },
    {
      ncs: 'Y60R',
      hsv: { H: '24', S: '100', V: '90' },
      rgb: { R: '230', G: '92', B: '0' },
      hex: 'E65C00'
    },
    {
      ncs: 'Y70R',
      hsv: { H: '18', S: '100', V: '90' },
      rgb: { R: '230', G: '69', B: '0' },
      hex: 'E64500'
    },
    {
      ncs: 'Y80R',
      hsv: { H: '12', S: '100', V: '90' },
      rgb: { R: '230', G: '46', B: '0' },
      hex: 'E62E00'
    },
    {
      ncs: 'Y90R',
      hsv: { H: '6', S: '100', V: '90' },
      rgb: { R: '230', G: '23', B: '0' },
      hex: 'E61700'
    }
  ];

  onChange = (_: any) => {};
  onTouch = () => {};

  selectColor(i: number): void {
    this.selectedColor = i;
    this.onChange(this.colors[i].hex);
  }

  // CVA methods

  writeValue(obj: any): void {
    this.selectedColor = this.colors.findIndex(e => e.hex === obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
