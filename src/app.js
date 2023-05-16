import express from "express"
import ProductManager from "./ProductManager.js";

const app = express()

app .get("/", (req, res) => {
    res.send("Nothing to see here")
})

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
})

const manager = new ProductManager();

app.get("/Products", async (req, res) => {
    try {
    const products = await manager.getProducts();
    res.send(products)
    } catch (error) {
    res.status(500).send("failed obtaining products");
    }
})

app.get("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await manager.getProductById(id);
    
    if (!product) {
        return res.send("Product not found")
    }

    return res.send(product);
    } catch (error) {
        console.log(error);
        return res.send("An error has ocurred");
    }
});


