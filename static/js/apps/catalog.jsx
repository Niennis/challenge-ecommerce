import React, { Component } from 'react';
import Product from './product';
import Cart from './cart';
import { catalog } from './../../../data/mock.json'

// import catalog from './../../../data/mock.json'


class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      productData: null,
      thisProduct: null,
    }
  }

  componentWillMount() {
    fetch('http://localhost:1337/items').then(data => (data.json())).then(response => {
      console.log(response);
      const productData = response.catalog;
      console.log(productData);
    this.setState({productData});
    })
    .catch(error => {
      console.log(error)
    })
  };

  addToChart(event) {
    // const { thisProduct } = this.state;
    const productPos = (event.target.name) - 1 ;
    // this.setState({thisProduct : thisProduct})
    console.log(productPos)
    // style.display = 'none';
    const thisProduct = this.state.productData[productPos];
    const newID = thisProduct.id * 100;
    console.log(thisProduct)
    this.setState({thisProduct});
  }

  renderProductsList(productData) {
    return productData.map(products => (
      <div className="catalog" key={products.id}>
        <Product imageURL={products.imageURL} name={products.name} currency={products.currency} price={products.price}>                    
        </Product>
        <button className="sendToCart" name={products.id} onClick={this.addToChart.bind(this)}>Add to cart</button>
      </div>
    ))}

  renderCart() {
    return (
      <Cart>
        <div className="productAdded" key={newID}>
          <Product imageURL={thisProduct.imageURL} name={thisProduct.name} currency={thisProduct.currency} price={thisProduct.price}>                    
          </Product>
          <button className="sendToCart" >Add to cart</button>
        </div>      
      </Cart>
    )
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
    return (
      <div>
        {/* {this.showProducts()} */}
        {thisProduct !== null ? this.renderCart(productData) : this.renderCartState()}        
        {productData !== null ? this.renderProductsList(productData) : this.renderProgress()}
      </div>
    );
  }
}

// class Catalog 

export default Catalog;