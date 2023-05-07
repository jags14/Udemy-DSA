export class Product {
    static products = [];
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    addProduct(id, name, price){
        const product = new Product(id, name, price);
        products.push(product);
        return products;
    }
}