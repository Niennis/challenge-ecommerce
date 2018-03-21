import React, { Component } from 'react';

class Cart extends Component {
  render(product) {
    return (
      <div className = "cartContainer">
        {product}
      </div>
    );
  }
}

export default Cart;

// constructor() {
//   super();
//   this.state = {
//     thisProduct: null
//   };
// }


// render() {
//   return (
//     <Cart>
//       <div className="cartContainer" key={newID}>
//         <Product imageURL={thisProduct.imageURL} name={thisProduct.name} currency={thisProduct.currency} price={thisProduct.price}>                    
//         </Product>
//         <button className="sendToCart" >Add to cart</button>
//       </div>      
//     </Cart>
//   );
// }