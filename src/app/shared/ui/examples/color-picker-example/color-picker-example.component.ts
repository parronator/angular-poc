import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-color-picker-example',
  templateUrl: './color-picker-example.component.html',
  styleUrls: ['./color-picker-example.component.scss']
})
export class ColorPickerExampleComponent {


  constructor(private fb: FormBuilder) { }

  colorForm = this.fb.group({
    shade: ['E600B8']
  });

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    console.log(this.colorForm.value);
    console.log(this.colorForm);
  }


}
