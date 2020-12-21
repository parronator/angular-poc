import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  form: FormGroup;
  result = '';

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: '',
      message: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(value: any): void{
    console.log(value);
    this.result = `${value.name} says: ${value.message}`;
  }

}
