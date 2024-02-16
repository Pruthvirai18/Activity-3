import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: 'Adidas Shoe', price: 10999, img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ec595635a2994adea094a8bf0117ef1a_9366/Samba_OG_Shoes_White_B75806_02_standard_hover.jpg', category: 'Category 1', rating: 4 },
    { id: 2, name: 'Gosriki women kurti', price: 620, img: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/ethnic-set/d/k/l/5xl-shank-maroon-5xl-gosriki-original-imagh33syerfpu32.jpeg?q=20&crop=false', category: 'Category 2', rating: 3 },
    { id: 3, name: 'SONY tv', price: 59000, img: 'https://m.media-amazon.com/images/I/71d5fMDvq9L.jpg', category: 'Category 1', rating: 5 },
    { id: 4, name: 'Samsung Refrigerator', price: 50000, img: 'https://images.samsung.com/is/image/samsung/p6pim/in/rt28c3922s9-hl/gallery/in-ref-tmf-rt3000-449401-rt28c3922s9-hl-535085978?$1300_1038_PNG$', category: 'Category 1', rating: 4 },
    { id: 5, name: 'Stylish bag', price: 500, img: 'https://images.dailyobjects.com/marche/product-images/1201/kelp-lunar-daypack-images/Kelp-Lunar-Daypack.png?tr=cm-pad_resize,v-2,w-768,h-648,dpr-1', category: 'Category 1', rating: 4 },
    // Add more products here
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const incrementQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decrementQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart.filter(item => item.quantity !== 0));
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">Shopping Cart</div>
          <input type="text" placeholder="Search..." />
          <ul>
            <li>All</li>
            <li>Category 1</li>
            <li>Category 2</li>
            {/* Add more categories here */}
          </ul>
        </nav>
      </header>
      <main>
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <div>Rating: {product.rating}</div>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div className="cart">
          <h2>Shopping Cart</h2>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <span>{item.name}</span>
                <button onClick={() => incrementQuantity(item.id)}>+</button>
                <span>{item.quantity}</span>
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
