import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems,addToCart, removeToCart} from "../actions";
import PropTypes from "prop-types";
import { Header,Footer} from "../components";
import { products } from "../mock";
import { DashboardRoutes } from "../routes";
class RootContainer extends Component 
{
    constructor(props,context) 
    {
      super(props,context);
      this.state = {
        carts: props.cartData.carts
         };
     
    }
    render() 
    {
        const {items,cartData} = this.props;
        return (
        <div>
        <Header cartData={cartData} handleApplyClick={this.getFilter} />
        <div className="container-fluid main-container">
          <div className="row col-12">
            <main className="col-12 col-md-12 col-xl-12 py-md-3 pl-md-5 bd-content">
               <DashboardRoutes items={items} carts={cartData.carts} handleAddToCart={this.handleAddToCart} handleRemoveToCart={this.handleRemoveToCart}
               handleSelect={this.handleSelect}/>
            </main>
          </div>
        </div>
        <Footer/>
      </div>
   
        );
    }


    componentDidMount = () => 
    {
      this.props.getItems();
      
    };

    handleSelect = event => 
    {
      const val=event.target.value;
      const { items,cartData} = this.props;
    
      if(val==="Name")
      {
        const itemData=items.sort((a,b)=>a.name.localeCompare(b.name))
        this.props.getItems(itemData); 
        const { carts } = this.state;
        const count = cartData.cartCount;
        const paylod = { carts, count };
        this.props.addToCart(paylod);
      } 

     else if(val==="Price")
      {
        const itemData=items.sort((a, b) => (a.price > b.price) ? 1 : (a.price === b.price) ? ((a.price > b.price) ? 1 : -1) : -1 )
        this.props.getItems(itemData); 
        const { carts } = this.state;
        const count = cartData.cartCount;
        const paylod = { carts, count };
        this.props.addToCart(paylod);
      } 
      else
      {
        alert("Under Development....");
      }
       
    };

    handleAddToCart = e => {
        const id = e.target.id;
       
        const { items,cartData} = this.props;
        const itemData=items.filter(i => i.id !== parseInt(id));
       
        this.props.getItems(itemData);
    
        const { carts } = this.state;
        const cartItem = items.filter(i => i.id === parseInt(id));
      
        const indexOf = carts.findIndex(c => 
          {
             return c.id === parseInt(id);
          });
         
        if (indexOf === -1) 
        {
          carts.push(cartItem[0]);
        } 
        else
         {
          carts.splice(indexOf, 1);
          carts.push(cartItem[0]);
        }
        const count = cartData.cartCount + 1;
        const paylod = { carts, count };
        this.props.addToCart(paylod);
      };
    
      handleRemoveToCart = e => {
        const id = e.target.id;
        const { items, cartData } = this.props;
        const { carts } = this.state;
        const indexOf = carts.findIndex(c => {
          return c.id === parseInt(id);
        });
    
        if (indexOf !== -1) 
        {
          carts.splice(indexOf, 1);
          const count = cartData.cartCount - 1;
          const paylod = { carts, count };
          this.props.removeToCart(paylod);
        }
    
        const productItem = products.filter(i => i.id === parseInt(id));
        const indexOfItem = items.findIndex(c =>
           {
              return c.id === parseInt(id);
          });
    
        if (indexOfItem === -1)
          {
           items.unshift(productItem[0]);
          } 
        else
         {
          items.splice(indexOfItem, 1);
          items.unshift(productItem[0]);
         }
        this.props.getItems(items);
      };
  
      getFilter=filterData => 
      {
        //list of array data as object & calling API.
        const itemData = products.filter(i => i.type === filterData);
        this.props.getItems(itemData);
      };
    

}

RootContainer.propTypes = 
{
  getItems: PropTypes.func.isRequired
  
};

const mapDispatchToProps = {
    getItems,
    addToCart,
    removeToCart
 };
const mapStateToProps = state => ({
    items: state.itemData.items,
    cartData: state.cartData
    });
  

export default connect(
    mapStateToProps,
    mapDispatchToProps
      )(RootContainer);
      