export interface Prod{
  id: number;
  nameProduct: string;
  price: number;
  description: string;
  createdAt: string;
}

export class Product{
  public static products: Prod[] = [
    { id: 1, nameProduct: 'Product 1', price: 10, description: 'Description of Product 1', createdAt: '2023-10-01' },
    { id: 2, nameProduct: 'Product 2', price: 20, description: 'Description of Product 2', createdAt: '2023-10-02' },
    { id: 3, nameProduct: 'Product 3', price: 30, description: 'Description of Product 3', createdAt: '2023-10-03' },
    { id: 4, nameProduct: 'Product 4', price: 40, description: 'Description of Product 4', createdAt: '2023-10-04' },
    { id: 5, nameProduct: 'Product 5', price: 50, description: 'Description of Product 5',  createdAt: '2023-10-05' },
  ];

  static addProduct(prod:Prod): void {
    prod.id = this.products.length + 1; // Atribui um novo ID baseado no tamanho atual do array
    this.products.push(prod);
  }

  static getProducts(): Prod[] {
    return this.products;
  }
}

