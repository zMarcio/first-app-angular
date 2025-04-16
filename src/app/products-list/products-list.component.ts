import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prod, Product } from '../../../data/products';
import { MatDialog } from '@angular/material/dialog';
import { FormsProductComponent } from '../forms-product/forms-product.component';

@Component({
  selector: 'app-products-list',
  imports: [CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})

export class ProductsListComponent {
  products : Prod[] = [...Product.getProducts()]
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(FormsProductComponent, {
      width: '1000px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.addProduct(result);
    });
  }

  addProduct(prod: Prod): void {
    console.log(prod)
    Product.addProduct(prod);
    this.products = [...Product.getProducts()];
  }
}
