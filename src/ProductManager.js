import fs from 'fs';

const path = './Files/Products.json';

    export default class ProductManager {

    getProducts = async () =>{
        if(fs.existsSync(path)){
            const data = await fs.promises.readFile(path,'utf-8');
            const productsList = JSON.parse(data);
            return productsList
        }else{
            console.log("There are no products"); 
        }
    };

    getProductById = async (id) => {
        const products = await this.getProducts();
        const product = products.find(prod => prod.id === parseInt(id));
        return product
    }
    }

