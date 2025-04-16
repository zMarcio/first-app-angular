export interface Prod{
  id: number;
  nameProduct: string;
  price: number;
  description: string;
}

export class Product{
  public static products: Prod[] = [
    { id: 1, nameProduct: 'Product 1', price: 10, description: 'Description of Product 1' },
    { id: 2, nameProduct: 'Product 2', price: 20, description: 'Description of Product 2' },
    { id: 3, nameProduct: 'Product 3', price: 30, description: 'Description of Product 3' },
    { id: 4, nameProduct: 'Product 4', price: 40, description: 'Description of Product 4' },
    { id: 5, nameProduct: 'Product 5', price: 50, description: 'Description of Product 5' }
  ];

  static addProduct(prod:Prod): void {
    prod.id = this.products.length + 1; // Atribui um novo ID baseado no tamanho atual do array
    this.products.push(prod);
  }

  static getProducts(): Prod[] {
    return this.products;
  }
}

