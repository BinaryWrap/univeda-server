import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  form: FormGroup;

  constructor(public fb: FormBuilder) { 
  	this.form = this.fb.group({
  		productName: ''
  	});
  }

  ngOnInit() {
  }

}
