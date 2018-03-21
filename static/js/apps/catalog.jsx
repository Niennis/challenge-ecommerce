import React, { Component } from 'react';
import Product from './product';
import Cart from './cart';
import { catalog } from './../../../data/mock.json';

// import catalog from './../../../data/mock.json'


class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      productData: null,
      thisProduct: null,
      total: 0,
    }
  }

  componentWillMount() {
    fetch('http://localhost:1337/items').then(data => (data.json())).then(response => {
      // console.log(response);
      const productData = response.catalog;
      // console.log(productData);
    this.setState({productData});
    })
    .catch(error => {
      console.log(error)
    })
  };

  renderProductsList(productData) {
    return productData.map(products => (
      <div className="catalog" key={products.id}>
        <Product imageURL={products.imageURL} name={products.name} currency={products.currency} price={products.price}>                    
        </Product>
        <button className="sendToCart" name={products.id} onClick={this.addToChart.bind(this)}>Add to cart</button>
      </div>
    ))}

  addToChart(event) {
    // const { thisProduct } = this.state;
    const productPos = (event.target.name) - 1 ;
    // this.setState({thisProduct : thisProduct})
    // console.log(productPos)
    // style.display = 'none';
    const product = this.state.productData[productPos];
    const newID = product.id * 100;
    // console.log(product)
    this.setState({thisProduct: product,
    total : this.state.total + product.price});
  }

  renderCart(thisProduct) {
    return (
        <div className="productAdded" name={(thisProduct.id)*100} key={(thisProduct.id)*100}>
          <Product imageURL={thisProduct.imageURL} name={thisProduct.name} currency={thisProduct.currency} price={thisProduct.price}> 
          </Product>
          <button className="remove" name={(thisProduct.id)*100} onClick={this.removeFromCart.bind(this)}>Remove from cart</button>
        </div>  
    )
  }

  removeFromCart(event) {
    const removeProd = (event.target.name);
    console.log(removeProd);
    const toRemove = document.getElementsByName(removeProd);
    const container = document.getElementsByClassName('cartAndListCont');
    container[0].removeChild(toRemove[0]);
    const productRemove = this.state.thisProduct;
    this.setState({total: this.state.total - productRemove.price});
  }

  renderProgress() {
    return (<h3> Cargando productos </h3>)
  }

  renderCartState() {
    return (<h3> No hay productos en el carro. </h3>)
  }



  render() {
    const {productData} = this.state;
    const {thisProduct} = this.state;
    const {total} = this.state;
    return (
      <div>
        <div className="cartAndListCont">
          <div className="totalPrice">{total}</div>
          {/* <Cart product = {thisProduct} ></Cart> */}
          {thisProduct !== null ? this.renderCart(thisProduct) : this.renderCartState()}   
        </div>
        <div>   
          {productData !== null ? this.renderProductsList(productData) : this.renderProgress()}
        </div>
      </div>
    );
  }
}

// class Catalog 

export default Catalog;