import express from "express"
import ProductManager from "./ProductManager.js";

const app = express()

app .get("/", (req, res) => {
    res.send("hello world")
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})

const manager = new ProductManager();

app.get("/Products", async (req, res) => {
    try {
    const products = await manager.getProducts();
    res.send(products)
    } catch (error) {
    res.status(500).send("Error al obtener los productos");
    }
});


