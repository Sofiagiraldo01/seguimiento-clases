const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Product {
    constructor(id, name, date, initialPrice) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.initialPrice = initialPrice;
        this.bids = [];
    }

    addBid(bid) {
        this.bids.push(bid);
    }

    getBids() {
        return this.bids;
    }
}

class Bid {
    constructor(date, value) {
        this.date = date;
        this.value = value;
    }
}

class Auction {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    registerProduct() {
        rl.question("Enter product ID: ", (id) => {
            rl.question("Enter product name: ", (name) => {
                rl.question("Enter product date (YYYY-MM-DD): ", (date) => {
                    rl.question("Enter initial price: ", (initialPrice) => {
                        const product = new Product(id, name, date, parseFloat(initialPrice));
                        this.addProduct(product);
                        console.log(`Product ${name} registered successfully.`);
                        rl.close();
                    });
                });
            });
        });
    }

    placeBid() {
        rl.question("Enter product ID: ", (productId) => {
            const product = this.products.find((p) => p.id === productId);

            if (!product) {
                console.log("Product not found.");
                rl.close();
                return;
            }

            rl.question("Enter bid date (YYYY-MM-DD): ", (date) => {
                rl.question("Enter bid value: ", (value) => {
                    const bid = new Bid(date, parseFloat(value));
                    product.addBid(bid);
                    console.log("Bid placed successfully.");
                    rl.close();
                });
            });
        });
    }

    listProducts() {
        console.log("List of registered products:");
        this.products.forEach((product, index) => {
            console.log(`${index + 1}. ${product.name} (${product.date}) - Initial price: ${product.initialPrice}`);
        });
        rl.close();
    }

    listBids(productId) {
        const product = this.products.find((p) => p.id === productId);

        if (!product) {
            console.log("Product not found.");
            rl.close();
            return;
        }

        console.log(`Bids for product ${product.name}:`);
        product.getBids().forEach((bid, index) => {
            console.log(`${index + 1}. ${bid.date} - ${bid.value}`);
        });
        rl.close();
    }

    selectWinningBid(productId) {
        const product = this.products.find((p) => p.id === productId);

        if (!product) {
            console.log("Product not found.");
            rl.close();
            return;
        }

        const bids = product.getBids();

        if (bids.length === 0) {
            console.log("No bids for this product.");
            rl.close();
            return;
        }

        const winningBid = bids.reduce((maxBid, bid) => (bid.value > maxBid.value ? bid : maxBid));
        console.log(`Winning bid for product ${product.name}: ${winningBid.date} - ${winningBid.value}`);
        rl.close
    }
}
