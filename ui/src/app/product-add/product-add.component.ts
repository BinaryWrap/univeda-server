import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ProductAddValidator } from './product-add.validator';

function matchBothSides(c: AbstractControl) {
	return c.get('productPrice').value == 12
    ? null : {'Number match': true};
}

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})

export class ProductAddComponent implements OnInit {

  form: any;

  constructor(public fb: FormBuilder) { 
  	this.form = this.fb.group({
  		productName: ['', Validators.compose([Validators.required, ProductAddValidator.productNameFilter])],
  		shortDescription: ['', Validators.required],
  		productPrice: ['', Validators.required],
  		productThumbnail: '',
  	});
  }

  ngOnInit() {
  }

  saveProduct() {

  }

}
