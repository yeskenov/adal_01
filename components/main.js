import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageBackground } from "react-native";

export default class Main extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <ImageBackground source={require('./images/wlp.jpg')} style={{width: '100%', height: '100%'}}>
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
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  adal: {
    color: 'white',
    marginTop: 50,
    fontSize: 50,
    textAlign: 'center',
  },
  adal1: {
    color: 'white',
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  texty: {
    textAlign: "center",
    color: 'white',
    fontWeight: 'bold',
    },
    texty1: {
      textAlign: "center",
      marginTop: 5,
      color: 'white',
      fontWeight: 'bold',
      },
  container0: {
    width: 120,
    height: 123,
    borderRadius:10,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    
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
    marginLeft: 45,
    marginRight: 45,
    //paddingTop: Constants.statusBarHeight,
  },
  container3: {
    flexDirection: 'row',
    marginLeft: 45,
    marginBottom: 20,
    marginRight: 45,
    justifyContent: 'space-between',
    //paddingTop: Constants.statusBarHeight,
  },
  container4: {
    flexDirection: 'row',
    marginLeft: 45,
    marginRight: 45,
    marginBottom: 20,
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
    paddingLeft: 3,
    width: 85,
    height: 85,
  },
  image1: { 
    paddingLeft: 3,
    width: 80,
    height: 80,
  }
});
