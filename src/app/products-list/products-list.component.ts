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
  lenProd : number = this.products.length;

  editarImage = "assets/icons/editar.png";
  excluirImage = "assets/icons/excluir.png";


  constructor(public dialog: MatDialog) {}

  // console.log(product)
  openDialog(product?:Prod): void {
    let dialogRef = this.dialog.open(FormsProductComponent, {
      width: '1000px',
      data: product,
    });



    dialogRef.afterClosed().subscribe(result => {
      if (result) this.addProduct(result, product);
      this.products = [...Product.getProducts()];
    });
  }

  addProduct(prod: Prod, product?: Prod): void {
    const idExists = this.products.find((p) => p.id === product?.id);
    if (idExists) {
      const newProduct: Prod = {
        id: product?.id || 0,
        nameProduct: prod.nameProduct,
        price: prod.price,
        description: prod.description,
        createdAt: prod.createdAt,
      }
      Product.updateProduct(newProduct);
    } else {
      Product.addProduct(prod);
    }
  }
}
