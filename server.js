import express from 'express';
import dotenv from 'dotenv';
import data from './data.js'

dotenv.config();

const app = express();

app.get('/api/' , (req , res) =>{
    res.send({ message: 'API is running'});
});

app.get('/api/products' , (req , res) =>{
    res.send(data.products);
});

app.get('/api/products/slug/:slug' , (req , res) =>{
    const product = data.products.find((x)=> x.slug === req.params.slug);
    if(product){
        res.send(product);
    }
    else{
        res.status(404).send({message: 'Product Not Found'})
    }
});

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`server running in ${port}`)
})