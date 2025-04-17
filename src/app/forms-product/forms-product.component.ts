import { Component, Inject } from '@angular/core';
import {  FormGroup, FormControl,  ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Prod, Product } from '../../../data/products';

@Component({
  selector: 'app-forms-product',
  imports: [ReactiveFormsModule],
  templateUrl: './forms-product.component.html',
  styleUrl: './forms-product.component.scss'
})
export class FormsProductComponent {
  productForm = new FormGroup({
    nameProduct: new FormControl<String>(''),
    price: new FormControl<Number>(0),
    description: new FormControl<String>(''),
    createdAt: new FormControl<String>('')
  })

  constructor(
    public dialogRef: MatDialogRef<FormsProductComponent>,
    @Inject(MAT_DIALOG_DATA) public incomingData: Prod
  ) {
    if (incomingData) {
      this.productForm.patchValue({
        nameProduct: incomingData.nameProduct,
        price: incomingData.price, // No need to cast to Number
        description: incomingData.description,
        createdAt: incomingData.createdAt,
      })
    } else {
      this.productForm.get('createdAt')?.setValue(new Date().toISOString().slice(0, 10));
    }
  }

  onSubmit() : void {
    this.dialogRef.close(this.productForm.value);
  }

  onCancel() : void{
    this.dialogRef.close();
  }
}
