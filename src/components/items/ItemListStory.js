import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../ui-kit";

const ItemListStory = ({ items }) => {
  return (
    <div>
      <div className="container-fluid main-container">
        <div className="row col-12">
          <main className="col-12 col-md-12 col-xl-12 py-md-3 pl-md-5 bd-content">
            <div>
              <div>
                <div className="testClass">
                  <div className="row">
                    {items &&
                      items.map(item => {
                        return (
                          <div className="col-sm-3" key={item.id}>
                            <div className="card">
                              <div className="card-body">
                                <div>
                                  <h6 className="priceTag">$ {item.price}</h6>
                                  <img
                                    src={item.image}
                                    className="img-thumbnail"
                                    alt={"img"}
                                  />
                                  <h5 className="card-title" title={item.name}>
                                    {item.name}
                                  </h5>
                                </div>
                                <Button
                                  type="button"
                                  className="btn btn-info"
                                  text="Add to cart"
                                  id={item.id}
                                  
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    {items.length === 0 && <p>No Data found to display</p>}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

ItemListStory.propTypes = {
  items: PropTypes.any
};

export default ItemListStory;
