import React, { Component } from "react";
/* import windowsData from "../data/windowsData"; */
import windowsData from "../data/windowsData"

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state={
    products: [],
    sortedProducts: [], 
    loading: true,
    //
    alt: "każdy rodzaj",
    short_name: "każdy typ",
  };

  componentDidMount(){
    let products = windowsData;

    this.setState({
      products,
      sortedProducts: products,//po zakomentowaniu można sprawdzić wygląd strony bez udanych wyników
      loading: false,
    });

  }

  getProduct = (slug) => {
    let tempProducts = [...this.state.products];
    const product = tempProducts.find(product => product.slug === slug );
    return product;
  };


  handleChange = event => {
    const target = event.target;
    const value = event.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
  
    this.setState(
      {
        [name]: value
      },this.filterProducts); 
  };

  filterProducts = () => {
    let {
      products,
      alt, //typ okna, drzwi, rolety...
      short_name, //rodzaj pvc, drewniane, aluminiowe...
    } = this.state;
    
    let tempProducts = [...products];
    let currentProducts = [...products];
    // transform values

    // filtruj alt
    if (alt !== "każdy rodzaj") {
      currentProducts = currentProducts.filter(product => product.alt === alt);
    }
    // filter by type
    if (short_name !== "każdy typ") {
      currentProducts = currentProducts.filter(product => product.short_name === short_name);
    }

    this.setState({
      sortedProducts: currentProducts
    });
  };
  

render() {
  return (
    <ProductContext.Provider value={{...this.state, getProduct: this.getProduct, handleChange:this.handleChange, handleChangeBox:this.handleChangeBox}}>
      {this.props.children}
    </ProductContext.Provider>
  )
}
}

const ProductConsumer = ProductContext.Consumer;

export function withProductConsumer(Component){
  return function ConsumerWrapper(props){
    return       <ProductConsumer>
    {value => <Component {...props} context={value} />}
  </ProductConsumer>
  }
}

export{ProductProvider, ProductConsumer, ProductContext};
