import { Component, Inject } from '@angular/core';
import {  FormGroup, FormControl,  ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-forms-product',
  imports: [ReactiveFormsModule],
  templateUrl: './forms-product.component.html',
  styleUrl: './forms-product.component.scss'
})
export class FormsProductComponent {
  productForm = new FormGroup({
    nameProduct: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    createdAt: new FormControl('')
  })

  constructor(
    public dialogRef: MatDialogRef<FormsProductComponent>,
    @Inject(MAT_DIALOG_DATA) public incomingData: any
  ) {}

  onSubmit() : void {
    this.dialogRef.close(this.productForm.value);
  }

  onCancel() : void{
    this.dialogRef.close();
  }
}
