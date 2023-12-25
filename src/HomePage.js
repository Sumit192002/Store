// HomePage.js
import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import './HomePage.css';

const HomePage = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch products using the token, search query, and price range
    const fetchProducts = async () => {
      try {
        const priceQuery = `&minPrice=${minPrice}&maxPrice=${maxPrice}`;
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}${priceQuery}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [token, searchQuery, minPrice, maxPrice]);

  return (
    <div className="homepage-container">
      <h2>Home Page</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <label>
        Min Price:
        <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
      </label>
      <label>
        Max Price:
        <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      </label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
             <button className="add-to-cart-button" onClick={() => setCartItems([...cartItems, product])}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default HomePage;
