import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "../../ui-kit";
import { getItemDetail } from "../../actions";
import {addToCart, removeToCart,getItems} from "../../actions";
import { Link } from "react-router-dom";
import * as routes from "../../lib/constants";
class Product extends Component {


  constructor(props,context) 
  {
    super(props,context);
    this.state = {
      carts: props.cartData.carts
       };
   
  }

  render() {
    const {item}=this.props;
   
    return ( 
     
      <div className="container">
         {item && (
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="product-preview-pic tab-content">
                  {item && (
                    <div className="tab-pane active" id="pic-1">
                      <img src={item.image} alt={item.id} />
                    </div>
                  )}
                </div>
              </div>
              {item && (
                <div className="product-details col-md-6">
                  <h3 className="product-title">{item.name}</h3>
                  <h3 className="product-title">{item.brand}</h3>
                  <p className="product-description">{item.description}</p>
                  <h4 className="price">
                    current price: <i className="fa fa-usd" />{" "}
                    <span>{item.price} </span>
                  </h4>
                  <div className="action">
                    <Button
                      type="button"
                      className="btn btn-info"
                      text="Add to cart"
                      id={item.id}
                      onClick={this.handleAddToCart}
                    />
                  </div>
                  <h3 className="product-title">{item.type}</h3>
                </div>
              )}
            </div>
          </div>
        </div>
         )}
        <Link to={`${routes.ROOT_ROUTE}`}>
        {<center><Button type="button" className="btn btn-info" text="Back"></Button></center>}
        </Link>
        </div>
     
      
    );
  }

  

  componentDidMount = () => {
    const { match } = this.props;
    
    if (match && match.params && match.params.id) 
    {
      this.props.getItemDetail(match.params.id);
    }
  };

  handleAddToCart = e => {
   
    const id = e.target.id;
    const {cartData,items} = this.props;
    const itemData=items.filter(i => i.id !== parseInt(id));
    this.props.getItems(itemData);

    const { carts } = this.state;
     const cartItem = items.filter(i => i.id === parseInt(id));
    this.props.getItemDetail(0); 

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



}

Product.propTypes = {
  item: PropTypes.any,
  handleAddToCart: PropTypes.func.isRequired,
  match: PropTypes.any,
  getItemDetail: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  item: state.itemData.item,
  items: state.itemData.items,
  cartData: state.cartData
});

const mapDispatchToProps = {
  getItems,
  getItemDetail,
  addToCart,
  removeToCart 
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
