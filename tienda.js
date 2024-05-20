const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Product {
    constructor(code, description, purchasePrice, sellingPrice, stock, minStock, maxStock, discount) {
        this.code = code;
        this.description = description;
        this.purchasePrice = purchasePrice;
        this.sellingPrice = sellingPrice;
        this.stock = stock;
        this.minStock = minStock;
        this.maxStock = maxStock;
        this.discount = discount;
    }

    shouldRequestOrder() {
        return this.stock <= this.minStock;
    }

    calculateTotalToPay(quantity) {
        const total = quantity * this.purchasePrice;
        return total - (total * (this.discount / 100));
    }
}

class Clothing extends Product {
    constructor(code, description, purchasePrice, sellingPrice, stock, minStock, maxStock, discount, size, allowIroning) {
        super(code, description, purchasePrice, sellingPrice, stock, minStock, maxStock, discount);
        this.size = size;
        this.allowIroning = allowIroning;
    }
}

class Shoe extends Product {
    constructor(code, description, purchasePrice, sellingPrice, stock, minStock, maxStock, discount, size) {
        super(code, description, purchasePrice, sellingPrice, stock, minStock, maxStock, discount);
        this.size = size;
    }
}

// Programa principal
rl.question("Enter the number of clothing products: ", (numClothing) => {
    const clothingProducts = [];

    for (let i = 0; i < numClothing; i++) {
        rl.question("Enter code: ", (code) => {
            rl.question("Enter description: ", (description) => {
                rl.question("Enter purchase price: ", (purchasePrice) => {
                    rl.question("Enter selling price: ", (sellingPrice) => {
                        rl.question("Enter stock: ", (stock) => {
                            rl.question("Enter min stock: ", (minStock) => {
                                rl.question("Enter max stock: ", (maxStock) => {
                                    rl.question("Enter discount: ", (discount) => {
                                        rl.question("Enter size: ", (size) => {
                                            rl.question("Allow ironing (true/false): ", (allowIroning) => {
                                                const clothing = new Clothing(code, description, parseFloat(purchasePrice), parseFloat(sellingPrice), parseInt(stock), parseInt(minStock), parseInt(maxStock), parseInt(discount), size, allowIroning === 'true');
                                                clothingProducts.push(clothing);
                                                if (i === numClothing - 1) {
                                                    console.log("Clothing products created:", clothingProducts);
                                                    rl.close();
                                                }
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }
});

rl.question("Enter the number of shoe products: "), (numShoes) => {
    const shoeProducts = [];

    for (let i = 0; i < numShoes; i++) {
        rl.question("Enter code: "), (code) => {
            rl.question("Enter description: "), (description) => {
                rl.question("Enter purchase price: "), (purchasePrice) => {
                    rl.question("Enter selling price: "), (sellingPrice) => {
                        rl.question("Enter stock: "), (stock) => {
                            rl.question("Enter min stock: "), (minStock) => {
                                rl.question("Enter max stock: "), (maxStock)=>{
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

                                

