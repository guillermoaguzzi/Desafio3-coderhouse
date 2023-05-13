import fs from 'fs';

const path = './Files/Products.json';

    class Product {
    constructor(id, title, description, price, thumbnail, code, stock) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
    }

    export default class ProductManager {

    getProducts = async () =>{
        if(fs.existsSync(path)){
            const data = await fs.promises.readFile(path,'utf-8');
            const productsList = JSON.parse(data);
            this.products = productsList;
            console.log(this.products); 
        }else{
            console.log(this.products); 
        }
    };

    }

