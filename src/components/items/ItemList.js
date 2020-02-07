import React from "react";
import PropTypes from "prop-types";
import { Button, Label } from "../../ui-kit";
import { Link } from "react-router-dom";
import { Item } from ".";
import * as routes from "../../lib/constants";



const handleRenderItemList = (
  items,
  handleAddToCart,
  handleRemoveToCart,
  handleSelect,
  isCart

) => {
  return (
    <div className="testClass">
      {
        <div className="form-group" id="productListSort">
          <Label htmlfor="Sort By" value="Sort By" />
          <select className="form-control"
            id="productListSortBy"
            onChange={handleSelect}
           >
            <option value="Select">Select</option>
            <option value="Name">Name</option>
            <option value="Price">Price</option>
            <option value="Quantity">Quantity</option>
            <option value="Popularity">Popularity</option>
            </select>
        </div>
      }
      <div className="row">
        {items.map(item => {
          return (
            <div className="col-sm-3" key={item.id}>
              <div className="card">
                <div className="card-body">
                  <Link to={`${routes.BASE_ITEM_ROUTE}${item.id}`}>
                    <Item item={item} />
                  </Link>
                  <Button
                    type="button"
                    className="btn btn-info"
                    text={isCart ? "Remove to cart" : "Add to cart"}
                    id={item.id}
                    onClick={isCart ? handleRemoveToCart : handleAddToCart}
                  />
                </div>
              </div>
              
            </div>
          );
        })}
      </div>
          {

             items &&
             <Link to={`${routes.ROOT_ROUTE}`}>
              {isCart ? <center><Button type="button" className="btn btn-info" text="Back"></Button></center> :<div></div>}
              </Link>
               }
    </div>
  );
};

const ItemList = ({ items, handleAddToCart,handleSelect, handleRemoveToCart, isCart }) => {
  return (
    <div>
      {items &&
        handleRenderItemList(
          items,
          handleAddToCart,
          handleRemoveToCart,
          handleSelect,
          isCart
        )}
      {!items && <p>No Data found to display</p>}
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.any,
  handleAddToCart: PropTypes.func,
  handleRemoveToCart: PropTypes.func,
  isCart: PropTypes.bool.isRequired,
  handleSelect:PropTypes.func
};
export default ItemList;
