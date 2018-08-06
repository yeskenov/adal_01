import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default class Main extends Component {
  static navigationOptions = {
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
      <View style={styles.container}>
      <Text style={styles.adal}>أضل</Text>
      <Text style={styles.adal1}>«Вкушайте благую снедь (халяль), которой Мы наделили вас, но не преступайте границы дозволенного в этом, а не то на вас падет Мой Гнев» (Коран, 20: 81). </Text>

       <View style={styles.container2}>
        <TouchableOpacity style={styles.container0} onPress={() => this.props.navigation.navigate("RestaurantList")} >
          <Image source={require('./images/1.png')} style={styles.image} />
            <Text style={styles.texty}>Заведения</Text>
          </TouchableOpacity>
       
        <TouchableOpacity style={styles.container0} onPress={() => this.props.navigation.navigate("Products")} >
          <Image source={require('./images/2.png')} style={styles.image} />
            <Text style={styles.texty}>Продукты</Text>
        </TouchableOpacity>       
        </View>
        
        <View style={styles.container3}>
        <TouchableOpacity style={styles.container0} onPress={() => this.props.navigation.navigate("Additives")} >
          <Image source={require('./images/3.png')} style={styles.image} />
            <Text style={styles.texty}>Добавки</Text>
          </TouchableOpacity>
       
        <TouchableOpacity style={styles.container0} onPress={() => this.props.navigation.navigate("Additives")} >
          <Image source={require('./images/4.png')} style={styles.image1} />
            <Text style={styles.texty1}>Мечети</Text>
        </TouchableOpacity>       
        </View>
       
        <View style={styles.container4}>
        <TouchableOpacity style={styles.container0} onPress={() => this.props.navigation.navigate("RestaurantList")} >
          <Image source={require('./images/5.png')} style={styles.image1} />
            <Text style={styles.texty1}>Справка</Text>
          </TouchableOpacity>
       
        <TouchableOpacity style={styles.container0} onPress={() => this.props.navigation.navigate("Additives")} >
          <Image source={require('./images/6.png')} style={styles.image1} />
            <Text style={styles.texty1}>О нас</Text>
        </TouchableOpacity>       
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  adal: {
    marginTop: 30,
    fontSize: 50,
    textAlign: 'center',
  },
  adal1: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  texty: {
    textAlign: "center",
    },
    texty1: {
      textAlign: "center",
      marginTop: 5,
      },
  container0: {
    width: 90,
    height: 90,
  },
  container: {
    flex: 1,
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 37,
    marginLeft: 50,
    marginRight: 50,
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  },
  container3: {
    flexDirection: 'row',
    marginLeft: 50,
    marginBottom: 40,
    marginRight: 50,
    justifyContent: 'space-between',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  },
  container4: {
    flexDirection: 'row',
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 40,
    justifyContent: 'space-between',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    margin: 30,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e"
  },
  image: { 
    width: 85,
    height: 85,
  },
  image1: { 
    width: 80,
    height: 80,
  }
});
