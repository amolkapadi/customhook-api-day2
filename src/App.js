import React from 'react';
import useFetch from './useFetch';
import './App.css'; 

const App = () => {
    const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Product List</h1>
            <div className="products-container">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} className="product-image" />
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-price">${product.price}</p>
                        <p className="product-rating">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
