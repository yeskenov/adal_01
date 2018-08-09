import { createStackNavigator } from "react-navigation"; 
import React from "react";
import Main from "./components/main";
import Additives from "./components/additives";
import RestaurantList from "./components/restaurantList";
import Products from "./components/products";
import Meat from "./components/meat"
import Milk from "./components/milk"
import Sweets from "./components/sweets"
import Bird from "./components/bird"
import Drinks from "./components/drinks"
import Priprava from "./components/priprava"

const RootStack = createStackNavigator({
  Main: { screen: Main },
  RestaurantList: { screen: RestaurantList },
  Additives: { screen: Additives },
  Products: { screen: Products },
  Meat: {screen: Meat},
  Milk: {screen: Milk},
  Sweets: {screen: Sweets},
  Bird: {screen: Bird},
  Drinks: {screen: Drinks},
  Priprava: {screen: Priprava}

},
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}



