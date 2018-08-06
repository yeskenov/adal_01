import { createStackNavigator } from "react-navigation"; 
import React from "react";
import Main from "./components/main";
import Additives from "./components/additives";
import RestaurantList from "./components/restaurantList";
import Products from "./components/products";


const RootStack = createStackNavigator({
  Main: { screen: Main },
  RestaurantList: { screen: RestaurantList },
  Additives: { screen: Additives },
  Products: { screen: Products },
},
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}



