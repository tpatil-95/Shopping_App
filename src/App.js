import React from "react";
import { Switch, Route } from "react-router-dom";
import * as routes from "./lib/constants";
import RootContainer from "./containers/RootContainer";

const App = () => {
  return (
    <Switch>
      <Route path={routes.ROOT_ROUTE} component={RootContainer} />
    </Switch>
  );
};

export default App;


















/*import React, { Component } from "react";
import './App.css';
import {connect} from 'react-redux';
import {anotherName,addWish} from './actions/myaction';
class App extends Component 
{

  addWish = () => 
  {
    console.log("addWish(in app)");
    const { mywish } = this.props
    let data = mywish.wish;
    data.push("List 3");
    this.props.addWish(data);
  }

  render(){
    const { mywish, anotherName, items } = this.props;
    console.log(this.props.items);
    return(
      <div className="App">
        <h1>Test</h1>
          {
            items && 
              items.map((item,index) => <h1 key={index}>{item.title}</h1>)
          }

          {
            mywish &&
              mywish.wish &&
                mywish.wish.map((w, index)=> <h2 key={index}>{w}</h2>)
          }
          <button onClick={()=>{ anotherName()}}>ChangeName</button>
          <button onClick={()=>{ this.addWish()}}>AddWish</button>
    </div>
    );
  }
}



const mapStateToProps = state => ({
  
  items: state.name.items,
  mywish: state.wish
  
});

const mapDispatchToProps = {
  
  anotherName,
  addWish
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);*/