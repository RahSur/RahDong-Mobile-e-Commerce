import React from 'react';
import {Grid} from "@material-ui/core";

import Product from "./Product/Product";

import useStyles from './styles';

// const products =[
//     {id: 1, name: 'Samsung', description: 'Samsung Galaxy S10', price: 'Rs 45000/-', image: 'https://samsungmobilespecs.com/wp-content/uploads/2019/11/Samsung-Galaxy-s10.jpg'},
//     {id: 2, name: 'OnePlus', description: 'OnePlus Nord', price: 'Rs 28000/-', image: 'https://images-na.ssl-images-amazon.com/images/I/51xqHF63nsL._AC_SX522_.jpg'},
//     {id: 3, name: 'Apple', description: 'Apple iPhone12', price: 'Rs 95000/-', image: 'https://cdn.myimaginestore.com/media/catalog/product/cache/7/image/745x/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-12-2020.jpg'},
//     {id: 4, name: 'Redmi', description: 'Redmi Note 100', price: 'Rs 15000/-', image: 'https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-10/specs-header.png'}, 
//     {id: 5, name: 'Asus', description: 'Asus ROG Phone 3', price: 'Rs 45000/-', image: 'https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/r/o/rog_phone_3-9_3.jpg'}
// ];

const Products = ( {products, onAddToCart } ) => {
    const classes = useStyles();

return (
<main className={classes.content}>
<div className={classes.toolbar} />
    <Grid container justify="center" spacing={4}>
        {products.map( (product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
        ))}
    </Grid>
</main>
)
}

export default Products;