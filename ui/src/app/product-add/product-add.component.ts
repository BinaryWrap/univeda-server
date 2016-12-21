import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms';

function matchBothSides(matchStatus: AbstractControl) {
	return matchStatus.get('productName').value == matchStatus.get('shortDescription').value
		? null : {'Don\'t Match': true};
}

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})

export class ProductAddComponent implements OnInit {

  form: FormGroup;

  constructor(public fb: FormBuilder) { 
  	this.form = this.fb.group({
  		productName: ['', Validators.required],
  		shortDescription: ['', Validators.required],
  		productPrice: ['', Validators.required],
  		productThumbnail: '',
  	},
  	{ validator: matchBothSides }
  	);
  }

  ngOnInit() {
  }

}
