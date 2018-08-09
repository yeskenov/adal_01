import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageBackground } from "react-native";

export default class Products extends Component {
  static navigationOptions = {
    title: "Продукты",
    headerStyle: {
      backgroundColor: "rgba(255,255,255,0.3)",
    },
    headerStyle: {
      backgroundColor: "white"
    },
    headerTintColor: "black",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 20,
      marginBottom: 5
    },
    headerStyle: {
      height: 50,
      backgroundColor: "white",
      shadowColor: "black",
      shadowRadius: 5,
      shadowOpacity: 0.2,
      shadowOffset: {
        height: 3,
        width: 0
      }
    }
  };
  render() {
    return (
      <ImageBackground source={require('./images/wlp.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
       <View style={styles.container2}>
        <TouchableOpacity style={styles.container0} onPress={() => this.props.navigation.navigate("Meat")} >
          <Image source={require('./images/food_logos/1.png')} style={styles.image} />
            <Text style={styles.texty}>Мясо</Text>
          </TouchableOpacity>
       
        <TouchableOpacity style={styles.container0} onPress={() => this.props.navigation.navigate("Sweets")} >
          <Image source={require('./images/food_logos/2.png')} style={styles.image} />
            <Text style={styles.texty}>Сладости</Text>
        </TouchableOpacity>       
        <TouchableOpacity style={styles.container0} onPress={() => this.props.navigation.navigate("Bird")} >
          <Image source={require('./images/food_logos/3.png')} style={styles.image} />
            <Text style={styles.texty}>Курица</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.container3}>
        <TouchableOpacity style={styles.container0} onPress={() => this.props.navigation.navigate("Milk")} >
          <Image source={require('./images/food_logos/4.png')} style={styles.image} />
            <Text style={styles.texty}>Молочные продукты </Text>
          </TouchableOpacity>
       
        <TouchableOpacity style={styles.container0} onPress={() => this.props.navigation.navigate("Additives")} >
          <Image source={require('./images/food_logos/5.png')} style={styles.image} />
            <Text style={styles.texty}>Колбасные изделия</Text>
        </TouchableOpacity>     
        <TouchableOpacity style={styles.container0} onPress={() => this.props.navigation.navigate("RestaurantList")} >
          <Image source={require('./images/food_logos/6.png')} style={styles.image} />
            <Text style={styles.texty}>Полуфабрикаты</Text>
          </TouchableOpacity>  
        </View>
        <View style={styles.container3}>
        <TouchableOpacity style={styles.container0} onPress={() => this.props.navigation.navigate("Additives")} >
          <Image source={require('./images/food_logos/7.png')} style={styles.image} />
            <Text style={styles.texty}>Макаронные изделия</Text>
          </TouchableOpacity>
       
        <TouchableOpacity style={styles.container0} onPress={() => this.props.navigation.navigate("Drinks")} >
          <Image source={require('./images/food_logos/8.png')} style={styles.image} />
            <Text style={styles.texty}>Соки/Напитки</Text>
        </TouchableOpacity>     
        <TouchableOpacity style={styles.container0} onPress={() => this.props.navigation.navigate("Priprava")} >
          <Image source={require('./images/food_logos/9.png')} style={styles.image} />
            <Text style={styles.texty}>Приправы</Text>
          </TouchableOpacity>  
        </View>

        <View style={styles.container4}>
        <TouchableOpacity style={styles.container0} onPress={() => this.props.navigation.navigate("RestaurantList")} >
          <Image source={require('./images/food_logos/10.png')} style={styles.image} />
            <Text style={styles.texty}>Крупы</Text>
          </TouchableOpacity>
       
        <TouchableOpacity style={styles.container0} onPress={() => this.props.navigation.navigate("Additives")} >
          <Image source={require('./images/food_logos/11.png')} style={styles.image} />
            <Text style={styles.texty}>Овощи/Фрукты</Text>
        </TouchableOpacity>     
        <TouchableOpacity style={styles.container0} onPress={() => this.props.navigation.navigate("RestaurantList")} >
          <Image source={require('./images/food_logos/12.png')} style={styles.image} />
            <Text style={styles.texty}>Рыба</Text>
          </TouchableOpacity>  
        </View>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container0: {
    width: 112,
    height: 112,
    borderRadius:10,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  texty: {
  textAlign: "center",
  color: 'white',
  fontWeight: 'bold',
  },
  container: {
    flex: 1,
    //paddingTop: Constants.statusBarHeight,
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    //paddingTop: Constants.statusBarHeight,
  },
  container3: {
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 30,
    marginRight: 10,
    justifyContent: 'space-between',
    //paddingTop: Constants.statusBarHeight,
  },
  container4: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
    justifyContent: 'space-between',
    //paddingTop: Constants.statusBarHeight,
  },
  paragraph: {
    margin: 30,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e"
  },
  image: { 
    width: 80,
    height: 80,

  }
});
